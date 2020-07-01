import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';

const socket: WebSocketSubject<any> = webSocket('wss://websocket.slumberparty.io');

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  http: HttpClient;

  replySource: Subject<any>;
  public reply: Observable<any>;

  constructor(http: HttpClient) {
    this.http = http;
    this.http.get("https://websocket.slumberparty.io/get-token").subscribe((data: any) => console.log(data));

    socket.subscribe(
      msg => this.setResponse(msg),
      err => console.log(err),
      () => console.log('complete')
    );

    this.replySource = new Subject<any>();
    this.reply = this.replySource.asObservable();
  }

  setResponse(msg: any) {
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    socket.next(msg);
  }
}
