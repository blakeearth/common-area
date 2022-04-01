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

  header: string = "Join the room!";
  roomId: string;
  roomTitle: string;
  roomDescription: string;
  faUsers = faUsers;
  memberCount = 0;

  socketService: SocketService;
  route: ActivatedRoute;

  location: Location;

  signedIn: boolean;

  // account for lost messages
  requestInterval: number;

  constructor(socketService: SocketService, route: ActivatedRoute, location: Location) {
    this.socketService = socketService;
    this.route = route;
    this.location = location;
  }

  ngOnInit(): void {
    if (this.location.path().includes("/j/")) {
      this.roomId = this.route.snapshot.paramMap.get('roomId');

      this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));

      this.requestInterval = window.setInterval(function() {
        console.log("sending");
        this.socketService.sendMessage({channel: "public", type: "request_room", room_id: this.roomId});
      }.bind(this), 500);
    }
  }

  navigate(s: string) {
    this.location.replaceState(s);
  }

  onResponseReceived(msg: any): void {
    if (msg["type"] == "request_room") {
      window.clearInterval(this.requestInterval);
      let hiddens: HTMLCollectionOf<Element> = document.getElementsByClassName("hidden-form");
        for (let i: number = 0; i < hiddens.length; i++) {
          let hidden: Element = document.getElementsByClassName("hidden-form")[i];
          hidden.classList.remove("hidden-form");
        }
      if (msg["title"] != null) {
        this.header = "Join " + msg["title"];
        this.roomTitle = msg["title"];
        this.roomDescription = msg["description"];
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
    else if (msg["type"] == "sign_in") {
      if (msg["password_correct"]) this.signedIn = true;
    }
  }

  joinRoom() {
    sessionStorage.setItem("joinRoomId", this.roomId);
    sessionStorage.setItem("joinRoomTitle", this.roomTitle);
    if (!this.signedIn) this.navigate('/auth/sign-up');
    else window.location.href = '/home';
  }

  goHome() {
    window.location.href = '/home';
  }

}
