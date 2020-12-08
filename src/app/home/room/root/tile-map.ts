import { TileEngine, imageAssets, initPointer, onPointerDown, track, getPointer, Sprite, GameObject } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

const epsilon = 0.0000000000001;

export class TileMap extends GameObject.class {
    socketService: SocketService;
    tileEngine: TileEngine;
  
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
        layers: layers
      });
      
      this.socketService = socketService;
      initPointer();
      track(this);
      track(this.tileEngine);
      onPointerDown(this.move.bind(this));
    }

    move(): void {
      console.log("move");
      let pointer: any = getPointer();
      // this is pretty gross, but the server typechecks for floats
      this.socketService.sendMessage({channel: "room", type: "set_target", position_x: (pointer.x + epsilon), "position_y": (pointer.y + epsilon)})
    }

    render(): void {
      this.tileEngine.render();
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