import { Socket } from 'dgram';
import { TileEngine, imageAssets, initPointer, onPointerDown, track, getPointer, Sprite, GameObject } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

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
      console.log(this.tileEngine.layers);

      console.log(this);
    
      console.log(this.move);
      onPointerDown(this.move.bind(this));
    }

    move(): void {
      let pointer: any = getPointer();
      this.socketService.sendMessage({channel: "room", type: "set_target", position_x: pointer.x, "position_y": pointer.y})
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