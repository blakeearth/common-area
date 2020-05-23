import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Goal } from '../goal';
import { SocketService } from '../../../socket/socket.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, Goal {

  header: string = "Sign up for an account"
  location: Location;
  ngForm: NgForm;
  socketService: SocketService;

  constructor(location: Location, socketService: SocketService) {
    this.location = location;
    this.socketService = socketService;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    if (this.socketService.token != null) {
      this.socketService.sendMessage({channel: "auth", type: "validate_session", token: this.socketService.token});
    }
  }

  onSubmit(f: NgForm) {
    let submission = {channel: "auth", type: "sign_up", username: <string> f.value["username"], password: <string> f.value["password"]};
    this.socketService.sendMessage(submission);
  }

  navigate(s: string) {
    this.location.replaceState(s);
  }

  onResponseReceived(msg: any): void {
    if (msg["type"] == "sign_up") {
      if (msg["password_correct"]) {
        if (msg["password_correct"] == true) {
          if (msg["token"]) {
            sessionStorage.setItem("token", msg["token"]);
            document.location.href = "/home";
          }
        }
      }
      else if (msg["error"]) {
        let error: HTMLElement = document.getElementById("error");
        error.innerHTML = msg["error"];
        error.id = "visible-error";
      }
    }
  }
}
