import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../room-change.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent extends Handler implements OnInit {
  roomChangeService: RoomChangeService;
  socketService: SocketService;

  game: HTMLIFrameElement;

  unsentMessages: Array<any> = [];
  gameIsReady: boolean = false;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    window.addEventListener("message", this.handleGameMessage.bind(this));
  }

  ngOnInit(): void {
    // register and observe socket channels
    if (!this.socketService.channelIsRegistered("room")) this.socketService.register("room");
    this.socketService.channelReply.get("room").subscribe(msg => {
      if (!this.gameIsReady) this.unsentMessages.push(msg);
      else {
        this.game.contentWindow.postMessage(JSON.stringify(msg), window.origin)
      };
    });

    this.game = <HTMLIFrameElement>document.getElementById("game");

    this.roomChangeService.roomId.subscribe(msg => {});
  }

  handleGameMessage(windowmsg: any): void {
    let msg: any = windowmsg["data"];
    if (msg["channel"] == "angular") {
      this[this.snakeToCamel(msg["type"])](msg);
    }
    else if (msg["channel"] == "room") {
      this.socketService.sendMessage(msg);
    }
  }

  /*reportLocation(): void {
    let log: HTMLElement = document.getElementById("game-log");
    let message: HTMLParagraphElement = document.createElement("p");
    message.innerHTML = this.displayName + " is now at " + Math.round(this.x) + " on the x-axis and " + Math.round(this.y) + " on the y-axis.";
    log.appendChild(message);
  }*/

  ready(msg: any) {
    this.gameIsReady = true;
    while (this.unsentMessages.length > 0) {
      let oldmsg: any = this.unsentMessages.pop();
      this.game.contentWindow.postMessage(JSON.stringify(oldmsg), window.origin);
    }
  }
}
