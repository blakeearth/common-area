import { Sprite, Vector } from 'kontra';

const speed: number = 5;

export class Player extends Sprite.class {
    target: Vector;
    direction: Vector;

    constructor() {
        super({
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
            },
        });
        this.target = Vector(this.x, this.y);
    }

    update(): void {
        let distance: number = this.target.distance(Vector(this.x, this.y));
        // also cancel movement upon collision! maybe upon collision, set target to position?
        if (distance > 4) {
            this.velocity = Vector(this.direction.x * speed, this.direction.y * speed);
        }
        else {
            this.target = Vector(this.x, this.y);
            this.dx = 0;
            this.dy = 0;
        }
        super.update();
    }

    setTarget(msg: any): void {
        this.target = Vector(msg["position_x"], msg["position_y"]);
        this.direction = Vector(this.target.x - this.x, this.target.y - this.y).normalize();
    }

}