import { Sprite, track, Vector } from 'kontra';

const speed: number = 5;

export class Player extends Sprite.class {
    id: string;
    target: Vector;
    direction: Vector;

    constructor(id: string) {
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
            onDown: function() {
                // display active task information
            }
        });
        this.id = id;
        this.target = Vector(this.x, this.y);
        track(this);
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

    setActiveTask(msg: any): void {
        
    }

}