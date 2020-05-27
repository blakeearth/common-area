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
    if (roomId != null) this.socketService.sendMessage({channel: "chat", type: "request_initial_messages", token: this.socketService.token, room_id: roomId});
  }

  onResponseReceived(msg: any): void {
    if (msg["type"] == "request_messages") {
      console.log(msg["messages"]);
      if (msg["messages"].length < 10) {
        document.getElementById("retrieving").classList.add("hidden");
        this.allChatsLoaded = true;
      }
      msg["messages"].forEach(data => {
        this.loadChat(data, false);
      });
    }
    else if (msg["type"] == "send_message") {
      this.loadChat({username: msg["username"], date_time: msg["time"], contents: msg["message"], chat_id: msg["chat_id"]}, true);
    }
  }

  onSendChat(): void {
    let chatBox: Element = document.getElementById("chat-field");
    let contents: string = chatBox.innerHTML;
    this.socketService.sendMessage({channel: "chat", type: "send_message", token: this.socketService.token, room_id: sessionStorage.getItem("room_id"), message: contents});
    chatBox.innerHTML = "";
  }

  onListScroll(): void {
    let list: Element = document.getElementById("list");
    if (list.scrollTop == 0 && !this.allChatsLoaded) {
      this.socketService.sendMessage({channel: "chat", type: "request_messages", token: this.socketService.token, room_id: this.roomId, before_chat_id: this.earliestChatId});
    }
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
