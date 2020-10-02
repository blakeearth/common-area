import { Component, OnInit } from '@angular/core';
import { init, Sprite, Text, GameLoop } from 'kontra';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  canvas: any;
  context: any;

  constructor() { }

  // ...
  ngOnInit(): void {
    let { canvas, context } = init();
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let sprite: Sprite = Sprite({
      x: 100,        // starting x,y position of the sprite
      y: 80,
      color: 'red',  // fill color of the sprite rectangle
      width: 0.1 * canvas.width,     // width and height of the sprite rectangle
      height: 0.1 * canvas.width,
      dx: 2          // move the sprite 2px to the right every frame
    });

    let text = Text({
      text: '🕯️',
      font: '128px Arial',
      color: 'white',
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: 3,
      anchor: {x: 0.5, y: 0.5},
      textAlign: 'center'
    });

    let loop: GameLoop = GameLoop({  // create the main game loop
      update: function() { // update the game state
        sprite.update();

        // wrap the sprites position when it reaches
        // the edge of the screen
        if (sprite.x > canvas.width) {
          sprite.x = -sprite.width;
        }
      },
      render: function() { // render the game state
        sprite.render();
        text.render();
      }
    });

    loop.start();    // start the game
  }
}
