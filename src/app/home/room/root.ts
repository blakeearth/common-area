import { Knode } from './knode';
import { TileMap } from './tile-map';

export class Root extends Knode {
    constructor(parent: Knode) {
        super(parent);
        // should probably be fetched from the server
        let layers: object[] = [{
        name: 'ground',
        data: [ 6,  6,  6,  6,  6,  6,  6,  6,  6,
                6,  6,  6,  7,  7,  8,  6,  6,  6,
                6,  6,  27, 24, 24, 25, 6,  6,  6,
                6,  23, 24, 24, 24, 26, 8,  6,  6,
                6,  23, 24, 24, 24, 24, 26, 8,  6,
                6,  23, 24, 24, 24, 24, 24, 25, 6,
                6,  46, 41, 41, 16, 24, 24, 25, 6,
                6,  6,  6,  6,  46, 41, 41, 42, 6,
                6,  6,  6,  6,  6,  6,  6,  6,  6 ]
      }];
      let map: TileMap = new TileMap(this, layers);
      console.log(this.children);
      this.children.add(map);
    }

}