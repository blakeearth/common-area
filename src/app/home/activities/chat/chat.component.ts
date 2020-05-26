import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Activity } from '../activity';
import { NgForm } from '@angular/forms';
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
    console.log("room: " + roomId);
    const viewContainerRef = this.chatMessageHost.viewContainerRef;
    viewContainerRef.clear();
    if (roomId != null) this.socketService.sendMessage({channel: "chat", type: "request_initial_messages", token: this.socketService.token, room_id: roomId});
  }

  onResponseReceived(msg: any): void {
    if (msg["type"] == "request_messages") {
      console.log(msg["messages"]);
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

  loadChat(data: any, recent: boolean): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChatMessageComponent);

    const viewContainerRef = this.chatMessageHost.viewContainerRef;

    let componentRef;
    if (recent) {
      componentRef = viewContainerRef.createComponent(componentFactory, 0);
    }
    else {
      componentRef = viewContainerRef.createComponent(componentFactory);
    }
    (<ChatMessageComponent>componentRef.instance).data = data;
  }

}
