import { Sprite, Vector } from 'kontra';
import { Knode } from '../knode';

const speed: number = 5;

export class Player extends Knode {
    player: Sprite;

    target: Vector;
    direction: Vector;

    constructor(parent: Knode) {
        super(parent);
        this.player = Sprite({
            type: 'player',
            x: 100,
            y: 100,
            dx: 0,
            dy: 0,
            radius: 64,
            render() {
              this.context.strokeStyle = 'white';
              this.context.beginPath();  // start drawing a shape
              this.context.arc(0, 0, this.radius, 0, Math.PI*2);
              this.context.stroke();     // outline the circle
            }
        });
        this.target = Vector(this.player.x, this.player.y);
    }

    render(): void {
        this.player.render();
        super.render();
    }

    update(): void {
        let distance: number = this.target.distance(Vector(this.player.x, this.player.y));
        // also cancel movement upon collision! maybe upon collision, set target to position?
        if (distance > 4) {
            this.player.velocity = Vector(this.direction.x * speed, this.direction.y * speed);
        }
        else {
            this.target = Vector(this.player.x, this.player.y);
            this.player.dx = 0;
            this.player.dy = 0;
        }
        this.player.update();
        super.update();
    }

    setTarget(msg: any): void {
        this.target = Vector(msg["position_x"], msg["position_y"]);
        this.direction = Vector(this.target.x - this.player.x, this.target.y - this.player.y).normalize();
    }

}