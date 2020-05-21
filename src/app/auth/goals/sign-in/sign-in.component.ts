import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'
import { Location } from '@angular/common';
import { AuthService } from '../../auth.service';
import { Goal } from '../goal';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, Goal {

  header: string = "Sign in to continue";
  location: Location;
  authService: AuthService;

  constructor(location: Location, authService: AuthService) {
    this.location = location;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.authService.reply.subscribe(msg => this.onResponseReceived(msg));
  }

  onSubmit(f: NgForm) {
    let submission = {type: "sign_in", username: f.value["username"], password: f.value["password"]};
    this.authService.sendMessage(submission);
  }

  navigate(s: string) {
    this.location.replaceState(s);
  }

  onResponseReceived(msg: any): void {
    if (msg["password_correct"]) {
      if (msg["password_correct"] == true) {
        if (msg["token"]) {
          document.cookie = "token=" + msg["token"] + ";";
          document.location.href = "/home";
        }
      }
      else {

      }
    }
  }

}
