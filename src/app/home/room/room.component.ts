import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { init, TileEngine, load, setImagePath, imageAssets, GameLoop, GameObject, Vector, getCanvas, Scene } from 'kontra';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../room-change.service';

import { images } from "./images";

import { ObjectFactory } from './object-factory'
import { Player } from './root/player/player';
import { PlayerTooltipDirective } from './root/player/player-tooltip.directive';
import { PlayerTooltipComponent } from './root/player/player-tooltip/player-tooltip.component';

import { TileMap } from './root/tile-map'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent extends Handler implements OnInit {

  @ViewChild(PlayerTooltipDirective, { static: true }) public playerTooltipHost: PlayerTooltipDirective;

  objects: Map<string, any>;

  objectFactory: ObjectFactory;

  roomChangeService: RoomChangeService;
  socketService: SocketService;

  componentFactoryResolver: ComponentFactoryResolver;

  editButtonDisplay: string;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService, componentFactoryResolver: ComponentFactoryResolver) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.objects = new Map<string, any>();
    this.objectFactory = new ObjectFactory(this, socketService);
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit(): void {
    // register and observe socket channels
    if (!this.socketService.channelIsRegistered("room")) this.socketService.register("room");
    this.socketService.channelReply.get("room").subscribe(msg => {
      if (this[this.snakeToCamel(msg["type"])] != undefined) this[this.snakeToCamel(msg["type"])](msg);
    });

    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));

    let { canvas, context } = init((document.getElementById("game") as HTMLCanvasElement));
    canvas.width = 9 * 128;
    canvas.height = 6 * 128;

    setImagePath('/assets/room/');
    load.apply(
      null, images
    );

    document.onresize = function() {
      canvas.width = 9 * 128;
      canvas.height =  6 * 128;
    };

    this.objects.set("scene", Scene({
      id: 'game',
      children: [],
      cullObjects: false
    }));

  }

  addPersistObject(msg: any): void {
    console.log(msg);
    let object: any = this.objectFactory.makeObject(this.objects, msg["data"]);
    if (msg["data"]["parent_id"] != null) {
      this.objects.get(msg["data"]["parent_id"]).addChild(object);

      if (msg["data"]["id"] == sessionStorage.getItem("account_id")) {
        // this is me
        
        let scene: Scene = this.objects.get("scene");
        let loop: GameLoop = GameLoop({
          update: function() {
            scene.update();
          },
          render: function() {
            scene.render();
          }
        });
      
        // start the loop
        loop.start();
        
      }
    }
    else {
      let scene: Scene = this.objects.get("scene");
      scene.addChild(object);
    }
    this.objects.set(msg["data"]["id"], object);
  }
  
  modifyPersistObject(msg: any): void {
	  if (this.objects.has(msg["id"])) {
      let object: any = this.objects.get(msg["id"]);
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
    this.editButtonDisplay = (sessionStorage.getItem("room_is_owner") == 'true') ? "inherit" : "none";
    /*this.objects = new Map<string, any>();
    this.objects.set("scene", Scene({
      id: 'game',
      children: [],
      cullObjects: false
    }));*/
  }

  openPlayerTooltip(displayName: string, id: string, position: Vector) {
    let roomPosition: Vector = new Vector(document.getElementById("game").offsetLeft, document.getElementById("game").offsetTop);

    let playerPositionCanvas: Vector = roomPosition.add(position).add(new Vector(64, 0)).subtract(new Vector(this.objects.get("scene").sx, this.objects.get("scene").sy));

    const viewContainerRef = this.playerTooltipHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PlayerTooltipComponent);

    let componentRef: ComponentRef<PlayerTooltipComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory);

    let instance: PlayerTooltipComponent = <PlayerTooltipComponent>componentRef.instance;
    instance.onClose = this.closePlayerTooltip.bind(this);
    instance.displayName = displayName;
    instance.id = id;
    instance.position = playerPositionCanvas;
  }

  closePlayerTooltip() {
    const viewContainerRef = this.playerTooltipHost.viewContainerRef;
    viewContainerRef.clear();
  }
}
