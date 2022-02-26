import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { SocketService } from '../../../socket/socket.service';
import { ActivatedRoute } from '@angular/router';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Goal } from '../goal';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit, Goal {

  header: string = "Join the Party!";
  roomId: string;
  roomTitle: string;
  faUsers = faUsers;
  memberCount = 0;

  socketService: SocketService;
  route: ActivatedRoute;

  location: Location;

  constructor(socketService: SocketService, route: ActivatedRoute, location: Location) {
    this.socketService = socketService;
    this.route = route;
    this.location = location;
  }

  ngOnInit(): void {
    if (this.location.path().includes("/j/")) {
      this.roomId = this.route.snapshot.paramMap.get('roomId');

      this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
      this.socketService.sendMessage({channel: "public", type: "request_room", room_id: this.roomId});
    }
  }

  navigate(s: string) {
    this.location.replaceState(s);
  }

  onResponseReceived(msg: any): void {
    if (msg["type"] == "request_room") {
      let hiddens: HTMLCollectionOf<Element> = document.getElementsByClassName("hidden-form");
        for (let i: number = 0; i < hiddens.length; i++) {
          let hidden: Element = document.getElementsByClassName("hidden-form")[i];
          hidden.classList.remove("hidden-form");
        }
      if (msg["title"] != null) {
        this.roomTitle = msg["title"];
        this.memberCount = msg["member_count"];
      }
      else {
        this.header = "Invalid Room Link";
        let forms: HTMLCollectionOf<Element> = document.getElementsByClassName("join-form-element");
        for (let i: number = 0; i < forms.length; i++) {
          let form: Element = document.getElementsByClassName("join-form-element")[i];
          form.classList.toggle("hidden-form");
        }
      }
    }
    else if (msg["type"] == "request_invitations") {
      window.location.href = '/home';
    }
    else if (msg["type"] == "sign_in" && !msg["password_correct"]) {
      this.navigate('/auth/sign-up');
    }
  }

  joinRoom() {
    sessionStorage.setItem("joinRoomId", this.roomId);
    sessionStorage.setItem("joinRoomTitle", this.roomTitle);
    this.socketService.sendMessage({channel: "settings", type: "request_invitations"});
  }

  goHome() {
    window.location.href = '/home';
  }

}
