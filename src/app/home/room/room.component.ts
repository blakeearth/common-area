import { Component, OnInit } from '@angular/core';
import { init, TileEngine, load, setImagePath, imageAssets, GameLoop } from 'kontra';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let { canvas, context } = init();
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    context.scale(4, 4);

    context.imageSmoothingEnabled = false;

    setImagePath('/assets/room/');
    load(
      'floor.png'
    ).then(() => {
      let img: HTMLImageElement = imageAssets['floor'];
      console.log(imageAssets);
      console.log(img);
      let tileEngine: TileEngine = TileEngine({
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
        layers: [{
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
        }]
      });
    
      let loop: GameLoop = GameLoop({
        render() {
          tileEngine.render();
        }
      });
    
      // start the loop
      loop.start();
      })
    }
  }
