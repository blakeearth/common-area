import { Injectable, OnInit } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnInit {

  socket: WebSocketSubject<any>;

  replySource: Subject<any>;
  public reply: Observable<any>;

  httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpClient.get("https://websocket.slumberparty.io/session").subscribe(
      msg => console.log(msg),
      err => console.log(err),
      () => {
        this.socket = webSocket('wss://websocket.slumberparty.io');

        this.socket.subscribe(
          msg => this.setResponse(msg),
          err => console.log(err),
          () => console.log('complete')
        );

        this.replySource = new Subject<any>();
        this.reply = this.replySource.asObservable();
      }
    );

  }

  ngOnInit() {
  }

  setResponse(msg: any) {
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    this.socket.next(msg);
  }
}
