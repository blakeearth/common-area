import { Injectable, OnInit } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: WebSocketSubject<any>;

  replySource: Subject<any>;
  public reply: Observable<any>;

  httpClient: HttpClient;

  unsentMessages: Array<any> = [];
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.replySource = new Subject<any>();
    this.reply = this.replySource.asObservable();
    this.establishWebsocket();
  }

  establishWebsocket() {
    this.httpClient.get('https://websocket.tasklodge.com', {responseType: 'text', withCredentials: true}).subscribe(data => {
      this.socket = webSocket('wss://websocket.tasklodge.com:4433');

      this.socket.subscribe(
        msg => this.setResponse(msg),
        err => console.log(err),
        () => console.log('complete')
      );

      while (this.unsentMessages.length > 0) {
        this.sendMessage(this.unsentMessages.pop());
      }
    });
  }

  setResponse(msg: any) {
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    if (this.socket === undefined) {
      this.unsentMessages.push(msg);
    }
    else {
      this.socket.next(msg);
    }
  }
}
