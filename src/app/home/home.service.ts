import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  socket: WebSocketSubject<any>;
  replySource: BehaviorSubject<any> = new BehaviorSubject<any>({"initialized": true});
  public reply: Observable<any> = this.replySource.asObservable();

  constructor() {
    this.socket = webSocket('ws://localhost:25614/home');
    this.socket.subscribe(
      msg => this.setResponse(msg),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  setResponse(msg: any) {
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    this.socket.next(msg);
  }
}
