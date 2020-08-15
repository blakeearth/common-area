import { Injectable } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';

const socket: WebSocketSubject<any> = webSocket('wss://websocket.slumberparty.io');

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  replySource: Subject<any>;
  public reply: Observable<any>;

  constructor() {

    socket.subscribe(
      msg => this.setResponse(msg),
      err => console.log(err),
      () => console.log('complete')
    );

    this.replySource = new Subject<any>();
    this.reply = this.replySource.asObservable();
    this.sendMessage({channel: "auth", type: "sign_in", username: "isaac@blake.earth", password: "derweh"});
  }

  setResponse(msg: any) {
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    socket.next(msg);
  }
}
