import { TileEngine, imageAssets, initPointer, track, getPointer, GameObject, Button, GameObjectClass, getWorldRect, getCanvas, Scene } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';
import { ObjectFactory } from '../object-factory';
import { RoomComponent } from '../room.component';

export class TileMap extends GameObjectClass {
    socketService: SocketService;
    tileEngine: TileEngine;

    editMode: boolean = false;
    activeItem: number;
    preview: GameObject;

    scene: Scene;
    player: GameObject;

    room: RoomComponent;
    objectFactory: ObjectFactory;
  
    constructor(width: number, height: number, layers: object[], socketService: SocketService, room: RoomComponent) {
      super();
      
      initPointer();

      let img: HTMLImageElement = imageAssets['floor'];

      this.tileEngine = TileEngine({
        // tile size
        tilewidth: 128,
        tileheight: 128,
    
        // map size in tiles
        width: width,
        height: height,
    
        // tileset object
        tilesets: [{
          firstgid: 1,
          image: img
        }],
    
        // layer object
        layers: layers,
      });

      this.room = room;
      this.objectFactory = new ObjectFactory(this.room, socketService, function(){});

      this.moveButton = Button({
        // button properties
        socketService: socketService,
        getEditMode: this.getEditMode.bind(this),
        padX: width * this.tileEngine.tilewidth,
        padY: height * this.tileEngine.tileheight,
        onDown: function() {
          let pointer: any = getPointer();
          if (!this.editMode) this.socketService.sendMessage({channel: "room", type: "set_target", position_x: Math.floor(this.player.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.player.y + pointer.y - getCanvas().height / 2)});
          else {
            this.socketService.sendMessage({channel: "room", type: "add_persist_object", scene_id: this.activeItem, parent_id: "root", rotation_degrees_y: 0, position_x: Math.floor(this.player.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.player.y + pointer.y - getCanvas().height / 2)});
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
        });
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
        });
      }
      this.scene.add(this.preview);
    }

    render(): void {
      this.tileEngine.render();
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
        this.scene.remove(this.preview);
        this.preview = undefined;
      }
    }
  }