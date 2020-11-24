import { Component, OnInit } from '@angular/core';
import { init, TileEngine, load, setImagePath, imageAssets, GameLoop } from 'kontra';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../room-change.service';

import { images } from "./images";
import { Knode } from './knode';
import { Root } from './root/root';

import { KnodeFactory } from './knode-factory'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent extends Handler implements OnInit {

  objects: Map<string, Knode>;

  knodeFactory: KnodeFactory;

  roomChangeService: RoomChangeService;
  socketService: SocketService;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.objects = new Map<string, Knode>();
    this.knodeFactory = new KnodeFactory(socketService);
  }

  ngOnInit(): void {
    // register and observe socket channels
    if (!this.socketService.channelIsRegistered("room")) this.socketService.register("room");
    this.socketService.channelReply.get("room").subscribe(msg => {
      console.log(this.snakeToCamel(msg["type"]));
      this[this.snakeToCamel(msg["type"])](msg);
    });


    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));

    let { canvas, context } = init();
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    //context.imageSmoothingEnabled = false;

    setImagePath('/assets/room/');
    load.apply(
      null, images
    ).then(() => {
      // root has a null parent
      let root: Root = new Root(null);
      this.objects.set("root", root);
    
      let loop: GameLoop = GameLoop({
        update: function() {
          root.update();
        },
        render: function() {
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
    let object: Knode = this.knodeFactory.makeKnode(this.objects, msg["data"]);
    console.log(msg["data"]["parent_id"]);
    this.objects.get(msg["data"]["parent_id"]).addChild(object);
    this.objects.set(msg["data"]["id"], object);
  }
  
  modifyPersistObject(msg: any): void {
    console.log(this.objects);
    console.log(msg);
    console.log(this.objects.has(msg["id"]));
	  if (this.objects.has(msg["id"])) {
      let knode: Knode = this.objects.get(msg["id"]);
      knode[this.snakeToCamel(msg["method"])](msg);
    }
  }

  onRoomChange(roomId: string): void {
  
  }
}
