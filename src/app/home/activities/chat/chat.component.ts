import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Activity } from '../activity';
import { ChatMessageDirective } from './chat-message.directive';
import { RoomChangeService } from '../../room-change.service';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, Activity {

  @ViewChild(ChatMessageDirective, {static: true}) chatMessageHost: ChatMessageDirective;

  header: string = "Chat";

  roomChangeService: RoomChangeService;
  componentFactoryResolver: ComponentFactoryResolver;
  socketService: SocketService;

  earliestChatId: string;
  roomId: string;
  allChatsLoaded: boolean;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService, componentFactoryResolver: ComponentFactoryResolver) {
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));
  }

  onRoomChange(roomId: string): void {
    this.roomId = roomId;
    document.getElementById("retrieving").classList.remove("hidden");
    this.allChatsLoaded = false;
    const viewContainerRef = this.chatMessageHost.viewContainerRef;
    viewContainerRef.clear();
    if (roomId != null) this.socketService.sendMessage({channel: "chat", type: "request_initial_messages", room_id: roomId});
  }

  onResponseReceived(msg: any): void {
    if (msg["type"] == "request_messages") {
      if (msg["messages"].length < 10) {
        document.getElementById("retrieving").classList.add("hidden");
        this.allChatsLoaded = true;
      }
      document.getElementById("retrieving-now").classList.add("hidden");
      document.getElementById("load-more").classList.remove("hidden");
      msg["messages"].forEach(data => {
        if (!this.allChatsLoaded) this.loadChat(data, false);
      });
    }
    else if (msg["type"] == "send_message") {
      let data: any = {display_name: msg["display_name"], sent_date: msg["sent_date"], contents: msg["contents"], chat_id: msg["chat_id"]};
      this.loadChat(data, true);
    }
  }

  onSendChat(event: any): void {
    let chatField: HTMLTextAreaElement = document.getElementById("chat-field") as HTMLTextAreaElement;
    let contents: string = chatField.value;
    this.socketService.sendMessage({channel: "chat", type: "send_message", room_id: sessionStorage.getItem("room_id"), contents: contents});
    chatField.value = "";
    event.preventDefault();
  }

  onListScroll(): void {
    let list: Element = document.getElementById("list");
    document.getElementById("retrieving-now").classList.remove("hidden");
    document.getElementById("load-more").classList.add("hidden");
    if (document.getElementById("retrieving-now").getBoundingClientRect().bottom > 0 && !this.allChatsLoaded) {
      this.socketService.sendMessage({channel: "chat", type: "request_messages", room_id: this.roomId, before_chat_id: this.earliestChatId});
    }
  }

  loadMore(): void {
    let list: Element = document.getElementById("list");
    document.getElementById("retrieving-now").classList.remove("hidden");
    document.getElementById("load-more").classList.add("hidden");
    this.socketService.sendMessage({channel: "chat", type: "request_messages", room_id: this.roomId, before_chat_id: this.earliestChatId});
  }

  loadChat(data: any, recent: boolean): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChatMessageComponent);

    const viewContainerRef = this.chatMessageHost.viewContainerRef;

    let componentRef;
    if (recent) {
      componentRef = viewContainerRef.createComponent(componentFactory, 0);
    }
    else {
      componentRef = viewContainerRef.createComponent(componentFactory);
      this.earliestChatId = data["chat_id"];
    }
    (<ChatMessageComponent>componentRef.instance).data = data;
  }
}
