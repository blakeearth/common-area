import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { init, TileEngine, load, setImagePath, imageAssets, GameLoop, GameObject, Vector, getCanvas, Scene, depthSort, Sprite, getWorldRect, getPointer, initPointer, lerp } from 'kontra';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { MembersService } from '../members.service';
import { RoomChangeService } from '../room-change.service';

import { images } from "./images";
import { InventoryPopupDirective } from './inventory-popup.directive';
import { InventoryPopupComponent } from './inventory-popup/inventory-popup.component';

import { ObjectFactory } from './object-factory'
import { Chicken } from './root/character/chicken/chicken';
import { Player } from './root/character/player/player';

import { PlayerTooltipDirective } from './root/character/player/player-tooltip.directive';
import { PlayerTooltipComponent } from './root/character/player/player-tooltip/player-tooltip.component';
import { EditItemTooltipDirective } from './root/edit-item-tooltip.directive';
import { EditItemTooltipComponent } from './root/edit-item-tooltip/edit-item-tooltip.component';
import { TileMap } from './root/tile-map';
import { VendorPopupDirective } from './vendor-popup.directive';
import { VendorPopupComponent } from './vendor-popup/vendor-popup.component';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent extends Handler implements OnInit {

  @ViewChild(PlayerTooltipDirective, { static: true }) public playerTooltipHost: PlayerTooltipDirective;
  @ViewChild(VendorPopupDirective, { static: true }) public vendorPopupHost: VendorPopupDirective;
  @ViewChild(InventoryPopupDirective, { static: true }) public inventoryPopupHost: InventoryPopupDirective;
  @ViewChild(EditItemTooltipDirective, { static: true }) public editItemTooltipHost: EditItemTooltipDirective;

  roomTitle: string;
  roomDescription: string;

  wealth: number = 0;
  newWealth: number = 0;

  objects: Map<string, any>;
  me: Player;
  target: {x: number, y: number};

  objectFactory: ObjectFactory;

  editMode: boolean = false;
  eraserMode: boolean = false;
  activeItem: number = 1;
  editingObject: GameObject;

  roomChangeService: RoomChangeService;
  socketService: SocketService;
  membersService: MembersService;

  componentFactoryResolver: ComponentFactoryResolver;

  editButtonDisplay: string = "none";

  loop: GameLoop;

  cameraOrigin: {x: number, y: number};

  constructor(socketService: SocketService, roomChangeService: RoomChangeService, membersService: MembersService, componentFactoryResolver: ComponentFactoryResolver) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.membersService = membersService;
    this.membersService.setRoom(this);
    this.objects = new Map<string, any>();
    this.objectFactory = new ObjectFactory(this, socketService, this.onItemDown.bind(this));
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit(): void {
    // register and observe socket channels
    if (!this.socketService.channelIsRegistered("room")) this.socketService.register("room");
    this.socketService.channelReply.get("room").subscribe(msg => {
      if (this[this.snakeToCamel(msg["type"])] != undefined) this[this.snakeToCamel(msg["type"])](msg);
    });

    if (!this.socketService.channelIsRegistered("settings")) this.socketService.register("settings");
    this.socketService.channelReply.get("settings").subscribe(msg => {
      if (msg["type"] == "edit_room_description") {
        this.roomDescription = msg["room_description"]
      }
      else if (msg["type"] == "edit_room_title") {
        this.roomTitle = msg["room_title"]
      }
    });

    this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));

    this.socketService.sendMessage({channel: "room", type: "request_wealth"});

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
      if (obj2 instanceof TileEngine || obj2 instanceof TileMap) {
        return -10000;
      }
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

  requestWealth(msg: any): void {
    this.newWealth = msg["wealth"];
  }

  requestSetTarget(): void {
    let pointer: any = getPointer();
    
  }

  addPersistObject(msg: any): void {
    let object: any = this.objectFactory.makeObject(msg["data"]);
    let scene: Scene = this.objects.get("scene");
    if (msg["data"]["parent_id"] != null) {
      
      scene.add(object);
      if (this.editMode) {
        if (typeof object.setEraserMode == "function") {
          object.setEraserMode(true);
        }
      }

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
        this.objects.get("root").setScene(this.objects.get("scene"));
        this.target = {x: object.x, y: object.y};
        this.cameraOrigin = this.target;
        let scene: Scene = this.objects.get("scene");

        if (this.loop != undefined) this.loop.stop();

        this.loop = GameLoop({
          update: function() {
            scene.update();
          },
          render: function() {
            this.target = {
              x: lerp(this.target.x, object.x + object.width / 2, 0.1),
              y: lerp(this.target.y, object.y + object.height / 2, 0.1)
            };
            scene.lookAt(this.target);
            scene.render();

            this.wealth = Math.ceil(lerp(this.wealth, this.newWealth, 0.02));

            for (let persistObject of this.objects.values()) {
              if (persistObject != this.objects.get("scene")) {
                let t = {
                  x: this.target.x - this.cameraOrigin.x - persistObject.width / 2,
                  y: this.target.y - this.cameraOrigin.y
                };
                persistObject.sx = t.x;
                persistObject.sy = t.y;
              }
            }
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
    //this.editButtonDisplay = (sessionStorage.getItem("room_is_owner") == 'true') ? "inherit" : "none";
    this.editButtonDisplay = "inherit";
    (this.objects.get("scene") as Scene).destroy();
    this.objects = new Map<string, any>();

    if (!(roomId == undefined)) {
      let data: any = this.roomChangeService.getRoomData();
      this.roomTitle = data["room_title"];
      this.roomDescription = data["room_description"];
    }

    let sort = function(obj1, obj2) {
      if (obj1 instanceof TileMap) return -1;
      if (obj2 instanceof TileMap) return 1;
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

  openInventoryPopup(): void {
    const viewContainerRef = this.inventoryPopupHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InventoryPopupComponent);

    let componentRef: ComponentRef<InventoryPopupComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory);

    let instance: InventoryPopupComponent = <InventoryPopupComponent>componentRef.instance;

    instance.onClose = this.closeInventoryPopup.bind(this);
    instance.setActiveItem = this.setActiveItem.bind(this);
    document.getElementById("inventory-nav").blur();
  }

  closeInventoryPopup(): void {
    const viewContainerRef = this.inventoryPopupHost.viewContainerRef;
    viewContainerRef.clear();
  }

  openVendorPopup(): void {
    const viewContainerRef = this.vendorPopupHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(VendorPopupComponent);

    let componentRef: ComponentRef<VendorPopupComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory);

    let instance: VendorPopupComponent = <VendorPopupComponent>componentRef.instance;
    instance.onClose = this.closeVendorPopup.bind(this);
    document.getElementById("store-nav").blur();
  }

  closeVendorPopup(): void {
    const viewContainerRef = this.vendorPopupHost.viewContainerRef;
    viewContainerRef.clear();
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.eraserMode) this.eraserMode = this.editMode;
    if (this.editMode) {
      for (let persistObject of this.objects.values()) {
        if (typeof persistObject.setEraserMode == "function") {
          persistObject.setEraserMode(true);
        }
      }
    }
    else {
      for (let persistObject of this.objects.values()) {
        if (typeof persistObject.setEraserMode == "function") {
          persistObject.setEraserMode(false);
        }
      }
    }
    document.getElementById("edit-room-nav").blur();
  }

  setActiveItem(itemId: number): void {
    let tileMap: TileMap = this.objects.get("root");
    tileMap.setActiveItem(itemId);
  }

  onItemDown(object: GameObject) {
    // this item can be erased. erase it!
    if (typeof object.setEraserMode == "function") {
      this.openEditItemTooltip(object);
    }
  }

  openEditItemTooltip(object) {
    const viewContainerRef = this.editItemTooltipHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EditItemTooltipComponent);

    let componentRef: ComponentRef<EditItemTooltipComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory);

    let instance: EditItemTooltipComponent = <EditItemTooltipComponent>componentRef.instance;
    instance.onErase = this.onItemErase.bind(this);
    instance.onMove = this.onItemMove.bind(this);

    let coords: Vector = this.getPointerPosition();

    instance.x = coords.x + "px";
    instance.y = coords.y + "px";

    this.editingObject = object;
  }

  closeEditItemTooltip() {
    const viewContainerRef = this.editItemTooltipHost.viewContainerRef;
    viewContainerRef.clear();
  }

  onItemErase(): void {
    this.socketService.sendMessage({"channel": "room", "type": "remove_persist_object", "id": this.editingObject.id});
    this.socketService.sendMessage({"channel": "room", "type": "request_inventory"});
    this.closeEditItemTooltip();
  }

  onItemMove(): void {
    this.socketService.sendMessage({"channel": "room", "type": "remove_persist_object", "id": this.editingObject.id});
    this.socketService.sendMessage({"channel": "room", "type": "request_inventory"});
    this.setActiveItem(this.editingObject.sceneId);
    this.closeEditItemTooltip();
  }

  getPointerPosition(): Vector {
    let gameBoundingRect: any = document.getElementById("game").getBoundingClientRect();

    let canvas: any = {
      x: gameBoundingRect.x,
      y: gameBoundingRect.y,
      width: getCanvas().width,
      height: getCanvas().height
    }

    let pointer: any = getPointer();

    let relativePointerPosition: Vector = Vector(pointer.x / canvas.width, pointer.y / canvas.height);
    
    let pointerPosition: Vector = Vector(relativePointerPosition.x * gameBoundingRect.width, relativePointerPosition.y * gameBoundingRect.height);
    pointerPosition = pointerPosition.add(Vector(gameBoundingRect.x, gameBoundingRect.y));
    return pointerPosition;
  }
}
