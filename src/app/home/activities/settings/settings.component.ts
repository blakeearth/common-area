import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../../room-change.service';
import { Activity } from '../activity';
import { RoomLinkDirective } from './room-link.directive';
import { RoomLinkComponent } from './room-link/room-link.component';
import { NgForm } from '@angular/forms';
import { RoomInvitationDirective } from './room-invitation.directive';
import { RoomInvitationComponent } from './room-invitation/room-invitation.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, Activity {
  
  @ViewChild(RoomLinkDirective, {static: true}) roomLinkHost: RoomLinkDirective;
  @ViewChild(RoomInvitationDirective, {static: true}) roomInvitationHost: RoomInvitationDirective;
  
  header: string = "Settings";
  roomPrivate: boolean = true;
  roomTitle: string = sessionStorage.getItem("room_title");

  socketService: SocketService;
  roomChangeService: RoomChangeService;
  componentFactoryResolver: ComponentFactoryResolver;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService, componentFactoryResolver: ComponentFactoryResolver) {
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));
    this.socketService.sendMessage({channel: "settings", type: "request_rooms"});
    this.socketService.sendMessage({channel: "settings", type: "request_invitations"});
    console.log(sessionStorage.getItem("room_id"));
    if (sessionStorage.getItem("room_id") != undefined) {
      this.socketService.sendMessage({channel: "settings", type: "enter_room", room_id: sessionStorage.getItem("room_id")});
    }
  }

  onResponseReceived(msg: any): void {
    console.log("Incoming message of type: " + msg["type"]);
    if (msg["channel"] == "settings") {
      if (msg["type"] == "request_rooms") {
        const viewContainerRef = this.roomLinkHost.viewContainerRef;
        viewContainerRef.clear();
        let numRooms = Object.keys(msg["rooms"]).length;
        if (numRooms == 0) {
          document.getElementById("room-settings").classList.add("hidden");
          document.getElementById("enter-room").classList.add("hidden");
        }
        else if (numRooms == 1) {
          document.getElementById("room-settings").classList.remove("hidden");
          document.getElementById("enter-room").classList.add("hidden");
        }
        else {
          document.getElementById("room-settings").classList.remove("hidden");
          document.getElementById("enter-room").classList.remove("hidden");
        }
        for (let name in msg["rooms"]) {
          if (sessionStorage.getItem("room_id") == null || sessionStorage.getItem("room_title") == null) {
            sessionStorage.setItem("room_id", msg["rooms"][name]);
            sessionStorage.setItem("room_title", name);
            this.socketService.sendMessage({channel: "settings", type: "enter_room", room_id: msg["rooms"][name]});
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
          sessionStorage.setItem("room_title", msg["room_title"]);
          sessionStorage.setItem("room_id", msg["room_id"]);
          this.roomTitle = sessionStorage.getItem("room_title");
          this.roomChangeService.setRoom(msg["room_id"]);
        }
        else {
          console.error("Failed to enter the room.");
        }
      }
      else if (msg["type"] == "join_room") {
        this.reloadRooms();
      }
      else if (msg["type"] == "request_invitations") {
        const viewContainerRef = this.roomInvitationHost.viewContainerRef;
        viewContainerRef.clear();
        let invitations = msg["invitations"];
        if (invitations.length > 0) {
          document.getElementById("invitations").classList.remove("hidden");
          invitations.forEach(invitation => {
            let data: any = {title: invitation["room_title"], room_id: invitation["room_id"], 
            username: invitation["username"], invitation_id: invitation["invitation_id"]};
            this.loadInvitation(data);
          });
        }
        else {
          document.getElementById("invitations").classList.add("hidden");
        }
      }
      else if (msg["type"] == "decline_invitation") {
        this.reloadInvitations();
      }
      else if (msg["type"] == "create_room") {
        this.socketService.sendMessage({channel: "settings", type: "enter_room", room_id: msg["room_id"]});
      }
      else if (msg["type"] == "leave_room") {
        if (msg["success"] == true) {
          sessionStorage.removeItem("room_title");
          sessionStorage.removeItem("room_id");
          console.log(sessionStorage.removeItem("room_title"));
          console.log(sessionStorage.removeItem("room_id"));
          this.reloadRooms();
        }
      }
    }
  }

  loadRoomLink(data: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoomLinkComponent);

    const viewContainerRef = this.roomLinkHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<RoomLinkComponent>componentRef.instance).data = data;
  }

  reloadRooms(): void {
    this.socketService.sendMessage({channel: "settings", type: "request_rooms"});
  }

  loadInvitation(data: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoomInvitationComponent);

    const viewContainerRef = this.roomInvitationHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<RoomInvitationComponent>componentRef.instance).data = data;
  }

  reloadInvitations(): void {
    this.socketService.sendMessage({channel: "settings", type: "request_invitations"});
  }

  onRoomChange(roomId: string): void {
    this.socketService.sendMessage({channel: "settings", type: "request_room_privacy", room_id: roomId});
    document.getElementById("room-title").innerHTML = sessionStorage.getItem("room_title");;
    this.reloadRooms();
  }

  onSubmitInvite(f: NgForm): void {
    let submission = {channel: "settings", type: "create_invitation", room_id: sessionStorage.getItem("room_id"), invitee: <string> f.value["username"]};
    this.socketService.sendMessage(submission);
  }

  onSubmitJoin(f: NgForm): void {
    let submission = {channel: "settings", type: "join_room", room_id: <string> f.value["joinCode"]};
    this.socketService.sendMessage(submission);
  }

  onSubmitLeave(): void {
    let submission = {channel: "settings", type: "leave_room", room_id: sessionStorage.getItem("room_id")};
    this.socketService.sendMessage(submission);
  }

  onSubmitCreate(f: NgForm): void {
    let submission = {channel: "settings", type: "create_room", title: <string> f.value["title"]};
    this.socketService.sendMessage(submission);
  }

  onToggleRoomPrivacy(): void {
    let submission = {channel: "settings", type: "set_room_privacy", room_id: sessionStorage.getItem("room_id"), private: !this.roomPrivate};
    this.socketService.sendMessage(submission);
  }
}
  