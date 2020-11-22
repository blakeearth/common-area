import { Component, OnInit } from '@angular/core';
import { init, TileEngine, load, setImagePath, imageAssets, GameLoop } from 'kontra';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../room-change.service';

import { images } from "./images";
import { Knode } from './knode';
import { Root } from './root';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent extends Handler implements OnInit {

  objects: Map<string, Knode>;

  roomChangeService: RoomChangeService;
  socketService: SocketService;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
  }

  ngOnInit(): void {
    // register and observe socket channels
    if (!this.socketService.channelIsRegistered("room")) this.socketService.register("room");
    this.socketService.channelReply.get("room").subscribe(msg => this[this.snakeToCamel(msg["type"])](msg));


    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));

    let { canvas, context } = init();
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    context.scale(4, 4);

    context.imageSmoothingEnabled = false;

    setImagePath('/assets/room/');
    load.apply(
      null, images
    ).then(() => {
      // root has a null parent
      let root: Root = new Root(null);
    
      let loop: GameLoop = GameLoop({
        render() {
          root.render();
        }
      });
    
      // start the loop
      loop.start();
      })
  }

  addPersistObject(msg: any): void {
    console.log("ADDING A PERSIST OBJECT TO THE TREE");
    console.log(msg);
  }

  onRoomChange(roomId: string): void {
  
  }
}
