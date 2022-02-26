import { TileEngine, imageAssets, initPointer, track, getPointer, GameObject, Button, GameObjectClass, getWorldRect, getCanvas } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

export class TileMap extends GameObjectClass {
    socketService: SocketService;
    tileEngine: TileEngine;

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

      this.socketService = socketService;
    }

    setPlayer(player: GameObject): void {
      this.player = player;
    }

    render(): void {
      this.tileEngine.render();
      super.render();
    }

    getEditMode(): boolean {
      return this.editMode;
    }

    toggleEditMode(): void {
      this.editMode = !this.editMode;
    }
  }