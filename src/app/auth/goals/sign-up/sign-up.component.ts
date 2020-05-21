import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Goal } from '../goal';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, Goal {

  header: string = "Sign up for an account"
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
    let submission = {type: "sign_up", username: <string> f.value["username"], password: <string> f.value["password"]};
    this.authService.sendMessage(submission);
  }

  navigate(s: string) {
    this.location.replaceState(s);
  }

  onResponseReceived(msg: any): void {
    console.log("success");
    if (msg["account_creation_success"]) {
      if (msg["account_creation_success"] == true) {
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
