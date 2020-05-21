import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, BehaviorSubject } from 'rxjs';

const socket: WebSocketSubject<any> = webSocket('ws://localhost:25614');

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  replySource: BehaviorSubject<any> = new BehaviorSubject<any>({"initialized": true});
  public reply: Observable<any> = this.replySource.asObservable();
  public token: string = this.getCookie("token");

  constructor() {
    console.log(this.token);
    socket.subscribe(
      msg => this.setResponse(msg),
      err => console.log(err),
      () => console.log('complete')
    );
    if (this.token != "") {
      this.sendMessage({channel: "auth", type: "validate_session", token: this.token});
    }
    else {
      console.log("I can't even hold onto my cookies.");
    }
  }

  setResponse(msg: any) {
    if (msg["token"] != null) {
      this.token = msg["token"];
    }
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    console.log(msg);
    socket.next(msg);
  }

  getCookie(cookieKey: string): string {
    let key = cookieKey + "=";
    let cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(key.length, cookie.length);
      }
    }
    return "";
  }
}
