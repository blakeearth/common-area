import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { init, TileEngine, load, setImagePath, imageAssets, GameLoop, GameObject, Vector, getCanvas, Scene, depthSort, Sprite, getWorldRect, getPointer, initPointer, lerp } from 'kontra';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { MembersService } from '../members.service';
import { RoomChangeService } from '../room-change.service';

import { images } from "./images";

import { ObjectFactory } from './object-factory'
import { Player } from './root/character/player/player';
import { PlayerTooltipDirective } from './root/character/player/player-tooltip.directive';
import { PlayerTooltipComponent } from './root/character/player/player-tooltip/player-tooltip.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent extends Handler implements OnInit {

  @ViewChild(PlayerTooltipDirective, { static: true }) public playerTooltipHost: PlayerTooltipDirective;

  objects: Map<string, any>;
  me: Player;
  target: {x: number, y: number};

  objectFactory: ObjectFactory;

  editMode: boolean = false;

  roomChangeService: RoomChangeService;
  socketService: SocketService;
  membersService: MembersService;

  componentFactoryResolver: ComponentFactoryResolver;

  editButtonDisplay: string;

  loop: GameLoop;

  constructor(socketService: SocketService, roomChangeService: RoomChangeService, membersService: MembersService, componentFactoryResolver: ComponentFactoryResolver) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.membersService = membersService;
    this.membersService.setRoom(this);
    this.objects = new Map<string, any>();
    this.objectFactory = new ObjectFactory(this, socketService);
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit(): void {
    // register and observe socket channels
    if (!this.socketService.channelIsRegistered("room")) this.socketService.register("room");
    this.socketService.channelReply.get("room").subscribe(msg => {
      console.log(msg);
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

    let sort = function(obj1, obj2) {
      [obj1, obj2] = [obj1, obj2].map(getWorldRect);
      return (obj1.y + obj1.height / 2) - (obj2.y + obj2.height / 2);
    }

    initPointer();

    this.objects.set("scene", Scene({
      id: 'game',
      children: [],
      cullObjects: false,
      sortFunction: sort
    }));
  }

  requestSetTarget(): void {
    let pointer: any = getPointer();
    if (!this.editMode) this.socketService.sendMessage({channel: "room", type: "set_target", position_x: Math.floor(this.me.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.me.y + pointer.y - getCanvas().height / 2)});
    else this.socketService.sendMessage({channel: "room", type: "add_persist_object", scene_id: 2, parent_id: "root", rotation_degrees_y: 0, position_x: Math.floor(this.me.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.me.y + pointer.y - getCanvas().height / 2)});
  }

  addPersistObject(msg: any): void {
    let object: any = this.objectFactory.makeObject(this.objects, msg["data"]);
    let scene: Scene = this.objects.get("scene");
    if (msg["data"]["parent_id"] != null) {
      
      scene.add(object);

      if (msg["data"]["scene_id"] == 1) {
        // this is a player
        // add to online members
        this.membersService.addMember(object);
        if (this.objects.has(msg["data"]["id"])) {
          // if this is me, reset the game loop as well
          this.objects.get("scene").remove(this.objects.get(msg["data"]["id"]));
        }
      }

      if (msg["data"]["id"] == sessionStorage.getItem("account_id")) {
        // this is me
        this.me = object;
        this.objects.get("root").setPlayer(object);
        this.target = {x: object.x, y: object.y};
        let scene: Scene = this.objects.get("scene");

        if (this.loop != undefined) this.loop.stop();

        this.loop = GameLoop({
          update: function() {
            scene.update();
          },
          render: function() {
            scene.render();
            this.target = {
              x: lerp(this.target.x, object.x + object.width / 2, 0.1),
              y: lerp(this.target.y, object.y + object.height / 2, 0.1)
            };
            scene.lookAt(this.target);
          }.bind(this)
        });
      
        // start the loop
        this.loop.start();
        
      }
    }
    else {
      scene.add(object);
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
      this.objects.get("scene").remove(object);
      if (object instanceof Player) this.membersService.removeMember(object);
    }
  }

  onRoomChange(roomId: string): void {
    this.editButtonDisplay = (sessionStorage.getItem("room_is_owner") == 'true') ? "inherit" : "none";
    (this.objects.get("scene") as Scene).destroy();
    this.objects = new Map<string, any>();

    let sort = function(obj1, obj2) {
      [obj1, obj2] = [obj1, obj2].map(getWorldRect);
      return (obj1.y + obj1.height / 2) - (obj2.y + obj2.height / 2);
    }

    this.objects.set("scene", Scene({
      id: 'game',
      children: [],
      cullObjects: false,
      sortFunction: sort
    }));
  }

  openPlayerTooltip(displayName: string, id: string, position: Vector) {
    let roomPosition: Vector = Vector(document.getElementById("game").offsetLeft, document.getElementById("game").offsetTop);

    let playerPositionCanvas: Vector = roomPosition.add(position);

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

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.objects.get("root").toggleEditMode();
  }
}
