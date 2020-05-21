import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'
import { Location } from '@angular/common';
import { SocketService } from '../../../socket/socket.service';
import { Goal } from '../goal';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, Goal {

  header: string = "Sign in to continue";
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
    let submission = {channel: "auth", type: "sign_in", username: f.value["username"], password: f.value["password"]};
    this.socketService.sendMessage(submission);
  }

  navigate(s: string) {
    this.location.replaceState(s);
  }

  onResponseReceived(msg: any): void {
    if (msg["password_correct"]) {
      if (msg["password_correct"] == true) {
        if (msg["token"]) {
          sessionStorage.setItem("token", msg["token"]);
          document.location.href = "/home";
        }
      }
      else {

      }
    }
  }

}
