import { init, TileEngine, load, setImagePath, imageAssets, GameLoop } from 'kontra';

import { Knode } from './knode';

export class TileMap extends Knode {
    tileEngine: TileEngine;
  
    constructor(parent: Knode, layers: object[]) {
      super(parent);
      let img: HTMLImageElement = imageAssets['floor'];
      console.log(imageAssets);
      console.log(img);
      this.tileEngine = TileEngine({
        // tile size
        tilewidth: 32,
        tileheight: 32,
    
        // map size in tiles
        width: 4,
        height: 3,
    
        // tileset object
        tilesets: [{
          firstgid: 1,
          image: img
        }],
    
        // layer object
        layers: layers
      });
    }
  
    render() {
      this.tileEngine.render();
      super.render();
    }
  }