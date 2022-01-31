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

  replySources: Map<string, Subject<any>>;
  public channelReply: Map<string, Observable<any>>;

  httpClient: HttpClient;

  unsentMessages: Array<any> = [];
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.replySource = new Subject<any>();
    this.reply = this.replySource.asObservable();
    this.replySources = new Map<string, Subject<any>>();
    this.channelReply = new Map<string, Observable<any>>();
    this.establishWebsocket();
  }

  establishWebsocket() {
    this.httpClient.get('https://ws.cowork.ac', {responseType: 'text', withCredentials: true}).subscribe(data => {
      this.socket = webSocket('wss://ws.cowork.ac:4433');

      this.socket.subscribe(
        msg => {

          if (msg["password_correct"] == true) {
            sessionStorage.setItem("username", msg["username"]);
            sessionStorage.setItem("account_id", msg["account_id"]);
            sessionStorage.setItem("display_name", msg["display_name"]);
          }

          this.setResponse(msg);

          // in the future, the below should be the only way to get messages.
          // classes should subscribe to individual channels.
          let channel: string = msg["channel"];
          if (this.channelIsRegistered(channel)) {
            this.replySources.get(channel).next(msg);
          }
        },
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

  channelIsRegistered(channel: string) {
    return this.replySources.has(channel);
  }

  register(channel: string) {
    this.replySources.set(channel, new Subject<any>());
    this.channelReply.set(channel, this.replySources.get(channel).asObservable());
  }
}
