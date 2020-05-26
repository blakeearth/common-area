import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../../room-change.service';
import { Activity } from '../activity';
import { RoomLinkDirective } from './room-link.directive';
import { RoomLinkComponent } from './room-link/room-link.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, Activity {
  
  @ViewChild(RoomLinkDirective, {static: true}) roomLinkHost: RoomLinkDirective;
  
  header: string = "Settings";
  roomPrivate: boolean = true;
  roomTitle: string = sessionStorage.getItem("room_title");

  socketService: SocketService;
  roomChangeService: RoomChangeService;
  componentFactoryResolver: ComponentFactoryResolver;

  roomLinks: any;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService, componentFactoryResolver: ComponentFactoryResolver) {
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));
    if (this.socketService.token != null) {
      this.socketService.sendMessage({channel: "settings", type: "request_rooms", token: this.socketService.token});
    }
    if (sessionStorage.getItem("room_id") != null) {
      let roomId = sessionStorage.getItem("room_id");
      this.socketService.sendMessage({channel: "settings", type: "enter_room", token: this.socketService.token, room_id: roomId});
      this.socketService.sendMessage({channel: "settings", type: "request_room_privacy", token: this.socketService.token, room_id: sessionStorage.getItem("room_id")});
    }
    this.roomLinks = [];
  }

  onResponseReceived(msg: any): void {
    console.log(msg["type"]);
    if (msg["channel"] == "settings") {
      if (msg["type"] == "request_rooms") {
        const viewContainerRef = this.roomLinkHost.viewContainerRef;
        viewContainerRef.clear();
        for (let name in msg["rooms"]) {
          if (sessionStorage.getItem("room_id") == null || sessionStorage.getItem("room_title") == null) {
            let roomId = msg["rooms"][name];
            sessionStorage.setItem("room_id", roomId);
            sessionStorage.setItem("room_title", name);
            this.roomTitle = name;
            document.getElementById("room-title").innerHTML = this.roomTitle;
          }
          if (!(msg["rooms"][name] == sessionStorage.getItem("room_id"))) {
            let data: any = {title: name, room_id: msg["rooms"][name]};
            this.loadRoomLink(data);
          }
        }
      }
      else if (msg["type"] == "request_room_privacy") {
        if (msg["private"] != this.roomPrivate) {
          this.roomPrivate = msg["private"];
          console.log("toggled");
          let privacyForms: HTMLCollectionOf<Element> = document.getElementsByClassName("privacy-form");
          for (let index = 0; index < privacyForms.length; index++) {
            const privacyForm = privacyForms[index];
            privacyForm.classList.toggle("hidden");
          }
        }
      }
      else if ( msg["type"] == "set_room_privacy") {
        if (msg["success"] == true) {
          this.roomPrivate = !this.roomPrivate;
          let privacyForms: HTMLCollectionOf<Element> = document.getElementsByClassName("privacy-form");
          for (let index = 0; index < privacyForms.length; index++) {
            const privacyForm = privacyForms[index];
            privacyForm.classList.toggle("hidden");
          }
        }
      }
      else if (msg["type"] == "enter_room") {
        if (msg["success"] == true) {
          console.log("Entered a room.");
          let roomId = msg["room_id"];
          sessionStorage.setItem("room_id", roomId);
          this.roomChangeService.setRoom(roomId);
        }
        else {
          console.error("Failed to enter the room.");
        }
      }
      else if (msg["type"] == "join_room") {
        this.reloadRooms();
      }
    }
  }

  loadRoomLink(data: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoomLinkComponent);

    const viewContainerRef = this.roomLinkHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.roomLinks.push(componentRef);
    (<RoomLinkComponent>componentRef.instance).data = data;
  }

  reloadRooms(): void {
    this.socketService.sendMessage({channel: "settings", type: "request_rooms", token: this.socketService.token});
  }

  onRoomChange(roomId: string): void {
    this.socketService.sendMessage({channel: "settings", type: "request_room_privacy", token: this.socketService.token, room_id: roomId});
    this.roomTitle = sessionStorage.getItem("room_title");
    document.getElementById("room-title").innerHTML = this.roomTitle;
    this.reloadRooms();
  }

  onSubmitJoin(f: NgForm): void {
    let submission = {channel: "settings", type: "join_room", token: this.socketService.token, room_id: <string> f.value["joinCode"]};
    this.socketService.sendMessage(submission);
  }

  onSubmitCreate(f: NgForm): void {
    let submission = {channel: "settings", type: "create_room", token: this.socketService.token, title: <string> f.value["title"]};
    this.socketService.sendMessage(submission);
  }

  onToggleRoomPrivacy(): void {
    let submission = {channel: "settings", type: "set_room_privacy", token: this.socketService.token, room_id: sessionStorage.getItem("room_id"), private: !this.roomPrivate};
    this.socketService.sendMessage(submission);
  }
}
  