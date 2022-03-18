import { imageAssets, initPointer, track, getPointer, GameObject, Button, GameObjectClass, getWorldRect, getCanvas, Scene } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';
import { ObjectFactory } from '../object-factory';
import { RoomComponent } from '../room.component';
import { PersistObject } from './persist-object';

export class TileMap extends GameObjectClass {
    socketService: SocketService;

    editMode: boolean = false;
    moving: boolean = false;
    activeItem: number;
    preview: PersistObject;

    scene: Scene;
    player: GameObject;

    room: RoomComponent;
    objectFactory: ObjectFactory;
  
    constructor(width: number, height: number, layers: object[], socketService: SocketService, room: RoomComponent) {
      super();
      
      initPointer();

      let img: HTMLImageElement = imageAssets['floor'];
      this.room = room;
      this.objectFactory = new ObjectFactory(this.room, socketService, function(){});

      this.moveButton = Button({
        // button properties
        socketService: socketService,
        getEditMode: this.getEditMode.bind(this),
        padX: width * 128,
        padY: height * 128,
        onDown: function() {
          let pointer: any = getPointer();
          if (!this.editMode) {
            this.socketService.sendMessage({channel: "room", type: "set_target", position_x: Math.floor(this.player.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.player.y + pointer.y - getCanvas().height / 2)});
          }
          else {
            if (this.moving) {
              this.socketService.sendMessage({channel: "room", type: "move_persist_object", id: this.preview.id, position_x: Math.floor(this.player.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.player.y + pointer.y - getCanvas().height / 2)});
              this.preview = undefined;
              this.moving = false;
            }
            else {
              this.socketService.sendMessage({channel: "room", type: "add_persist_object", scene_id: this.activeItem, parent_id: "root", rotation_degrees_y: 0, position_x: Math.floor(this.player.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.player.y + pointer.y - getCanvas().height / 2)});
            }
            this.setEditMode(false);
          }
        }.bind(this)
      });

      this.addChild(this.moveButton);

      this.socketService = socketService;
    }

    setScene(scene: Scene): void {
      this.scene = scene;
    }

    setPlayer(player: GameObject): void {
      this.player = player;
    }

    setActiveItem(itemId: number): void {
      this.setEditMode(true);
      this.activeItem = itemId;
      if (this.preview == undefined) {
        let pointer = getPointer();
        this.preview = this.objectFactory.makeObject({
          "scene_id": this.activeItem,
          "id": "preview",
          "translation_x": pointer.x,
          "translation_y": pointer.y,
          "rotation_degrees": 0,
          "display_name": "",
        }) as PersistObject;
      }
      else if (this.scene.objects.includes(this.preview)) {
        this.scene.remove(this.preview);
        let pointer = getPointer();
        this.preview = this.objectFactory.makeObject({
          "scene_id": this.activeItem,
          "id": "preview",
          "translation_x": pointer.x,
          "translation_y": pointer.y,
          "rotation_degrees": 0,
          "display_name": "",
        }) as PersistObject;
      }
      this.scene.add(this.preview);
    }

    setPreview(object: PersistObject): void {
      this.moving = true;
      this.setEditMode(true);
      this.activeItem = object.sceneId;
      this.preview = object;
    }

    render(): void {
      this.moveButton.sx = -this.sx;
      this.moveButton.sy = -this.sy;
      this.moveButton.render();
      let pointer = getPointer();
      if (this.scene.objects.includes(this.preview)) {
        this.preview.x = Math.floor(this.player.x + pointer.x - getCanvas().width / 2);
        this.preview.y = Math.floor(this.player.y + pointer.y - getCanvas().height / 2);
      }
      super.render();
    }

    getEditMode(): boolean {
      return this.editMode;
    }

    setEditMode(editMode: boolean): void {
      this.editMode = editMode;
      if (!editMode) {
        if (this.preview) this.scene.remove(this.preview);
        this.preview = undefined;
      }
    }
  }