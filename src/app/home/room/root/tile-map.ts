import { TileEngine, imageAssets, initPointer, track, getPointer, GameObject, Button, GameObjectClass, getWorldRect, getCanvas } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

export class TileMap extends GameObjectClass {
    socketService: SocketService;
    tileEngine: TileEngine;

    moveButton: Button;

    editMode: boolean = false;

    player: GameObject;
  
    constructor(width: number, height: number, layers: object[], socketService: SocketService) {
      super();
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

      console.log(layers);

      this.socketService = socketService;
      initPointer();

      this.moveButton = Button({
        // button properties
        socketService: socketService,
        getEditMode: this.getEditMode.bind(this),
        padX: width * this.tileEngine.tilewidth,
        padY: height * this.tileEngine.tileheight,
        color: "red",
        onFocus: function() {
            // TODO: read out to the screen reader
        },
        render: function() {
            if (this.pressed) {
              this.disable();
              this.willEnable = false;
              this.pressed = false;
              let pointer: any = getPointer();
              if (!this.getEditMode()) this.socketService.sendMessage({channel: "room", type: "set_target", position_x: Math.floor(this.parent.player.x + pointer.x - getCanvas().width / 2), position_y: Math.floor(this.parent.player.y + pointer.y - getCanvas().height / 2)});
              else this.socketService.sendMessage({channel: "room", type: "add_persist_object", scene_id: 2, parent_id: "root", rotation_degrees_y: 0, position_x: Math.floor(pointer.x), position_y: Math.floor(pointer.y)});
            }
            else if (this.disabled && !this.willEnable) {
              this.willEnable = true;
              new Promise(resolve => setTimeout(this.enable.bind(this), 300));
            }
        }
    });

    this.addChild(this.moveButton);
    }

    setPlayer(player: GameObject): void {
      this.player = player;
    }

    render(): void {
      this.tileEngine.render();
      this.moveButton.render();
      super.render();
    }

    getEditMode(): boolean {
      return this.editMode;
    }

    toggleEditMode(): void {
      this.editMode = !this.editMode;
      console.log(this.editMode);
    }
  }