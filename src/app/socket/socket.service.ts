import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, BehaviorSubject } from 'rxjs';

const socket: WebSocketSubject<any> = webSocket('wss://websocket.slumberparty.io');

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  replySource: BehaviorSubject<any> = new BehaviorSubject<any>({"initialized": true});
  public reply: Observable<any> = this.replySource.asObservable();
  public token: string = sessionStorage.getItem("token");

  constructor() {
    socket.subscribe(
      msg => this.setResponse(msg),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  setResponse(msg: any) {
    if (msg["token"] != null) {
      this.token = msg["token"];
    }
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    socket.next(msg);
  }
}
