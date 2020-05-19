import { Component, OnInit } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

const socket: WebSocketSubject<any> = webSocket('ws://localhost:25614/');

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let reply = {type: "sign_in", username: "blakeearth", password: "susaan"};
    socket.next(reply);
    socket.subscribe(
      msg => this.onMsgReceived(msg), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
    document.cookie = "name=susanna;SameSite=Strict;HttpOnly;Secure";
  }

  onMsgReceived(msg: string): void {
    console.log('message received: ' + msg["token"]);
  }

}
