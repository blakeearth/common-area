import { Socket } from 'dgram';
import { TileEngine, imageAssets, initPointer, onPointerDown, track, getPointer, Sprite } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

import { Knode } from '../knode';

export class TileMap extends Knode {
    socketService: SocketService;

    tileEngine: TileEngine;
  
    constructor(parent: Knode, width: number, height: number, layers: object[], socketService: SocketService) {
      super(parent);
      this.socketService = socketService;

      let img: HTMLImageElement = imageAssets['floor'];

      initPointer();

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

      track(this.tileEngine);

      //onPointerDown(this.move.bind(this));

      console.log(this.tileEngine.layers);
    }

    move() {
      let pointer: any = getPointer();
      pointer
      this.socketService.sendMessage({channel: "room", type: "set_target", position_x: pointer.x, "position_y": pointer.y})
    }
  
    render() {
      this.tileEngine.render();
      super.render();
    }
  }