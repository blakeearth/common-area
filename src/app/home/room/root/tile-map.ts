import { TileEngine, imageAssets, initPointer, track, getPointer, GameObject, onPointerUp, onPointerDown, Button } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

export class TileMap extends GameObject.class {
    socketService: SocketService;
    tileEngine: TileEngine;

    moveButton: Button;
  
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

      this.moveButton = new Button({
        // button properties
        socketService: socketService,
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
              this.socketService.sendMessage({channel: "room", type: "set_target", position_x: Math.floor(pointer.x), position_y: Math.floor(pointer.y)});
            }
            else if (this.disabled && !this.willEnable) {
              this.willEnable = true;
              new Promise(resolve => setTimeout(this.enable.bind(this), 300));
            }
        }
    });

    this.addChild(this.moveButton);
    }

    render(): void {
      this.tileEngine.render();
      this.moveButton.render();
      super.render();
    }

    addChild(object: GameObject): void {
      this.tileEngine.addObject(object);
      super.addChild(object);
      console.log(this.children);
    }

    removeChild(object: GameObject): void {
      this.tileEngine.removeObject(object);
      super.removeChild(object);
    }
  }