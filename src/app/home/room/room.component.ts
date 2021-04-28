import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Godot } from 'src/assets/room/slumber-party-room';
import { init, TileEngine, load, setImagePath, imageAssets, GameLoop, GameObject } from 'kontra';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../room-change.service';

import { images } from "./images";

import { ObjectFactory } from './object-factory'

import { TileMap } from './root/tile-map'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent extends Handler implements OnInit {

  objects: Map<string, any>;

  objectFactory: ObjectFactory;

  roomChangeService: RoomChangeService;
  socketService: SocketService;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.objects = new Map<string, any>();
    this.objectFactory = new ObjectFactory(socketService);
  
    let meta = {"gloria": "beret"};


    // TODO: MAKE SURE TO CLEAR ITEM AT LAUNCH BEFORE SETTING TO NEW THING

    window.sessionStorage.setItem("toGodot", JSON.stringify(meta));
    let meta1 = JSON.parse(window.localStorage.getItem("meta"));
  }

  ngOnInit(): void {
    // register and observe socket channels
    if (!this.socketService.channelIsRegistered("room")) this.socketService.register("room");
    this.socketService.channelReply.get("room").subscribe(msg => {
      this[this.snakeToCamel(msg["type"])](msg);
    });


    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));

    /*let { canvas, context } = init();
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    //context.imageSmoothingEnabled = false;

    setImagePath('/assets/room/');
    load.apply(
      null, images
    );

    document.onresize = function() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };*/

  }

  addPersistObject(msg: any): void {
    console.log(msg);
    let object: any = this.objectFactory.makeObject(this.objects, msg["data"]);
    if (msg["data"]["parent_id"] != null) {
      this.objects.get(msg["data"]["parent_id"]).addChild(object);
    }
    else {
      let loop: GameLoop = GameLoop({
        update: function() {
          object.update();
        },
        render: function() {
          object.render();
        }
      });
    
      // start the loop
      loop.start();
    }
    this.objects.set(msg["data"]["id"], object);
  }
  
  modifyPersistObject(msg: any): void {
	  if (this.objects.has(msg["id"])) {
      let object: any = this.objects.get(msg["id"]);
      console.log(object);
      console.log(msg["method"]);
      object[this.snakeToCamel(msg["method"])](msg);
    }
  }

  peerChangedActiveListing(msg: any): void {
    let player: any = this.objects.get(msg["persist_object_id"]);
    if (msg["public"] == true) {
      let player: any = this.objects.get(msg["persist_object_id"]);
    }
  }

  removePersistObject(msg: any): void {
    if (this.objects.has(msg["id"])) {
      let object: GameObject = this.objects.get(msg["id"]);
      object.parent.removeChild(object);
    }
  }

  onRoomChange(roomId: string): void {
  
  }
}
