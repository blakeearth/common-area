import { imageAssets, Sprite, SpriteSheet, track, Vector, Text, Button, getCanvas, getWorldRect, SpriteClass, getPointer } from 'kontra';
import { RoomComponent } from '../../room.component';

const speed: number = 5;

export class Character extends SpriteClass {
    id: string;
    displayName: string;
    target: Vector;
    direction: Vector;

    playingAnimation: string;

    shadow: Sprite;

    lastDistance: number;

    constructor(id: string, displayName: string, position: Vector, data?: {
        type: string,
        x: number,
        y: number,
        dx: number,
        dy: number,
        image: any,
        animations: any,
        children: []
    }) {
        let spriteSheet = SpriteSheet({
            image: imageAssets["bear"],
            frameWidth: 128,
            frameHeight: 128,
            animations: {
                walkFR: {
                    frames: '0..47',
                    frameRate: 90
                },
                idleFR: {
                    frames: '48..195',
                    frameRate: 0
                },
                walkFL: {
                    frames: '49..96',
                    frameRate: 90
                },
                idleFL: {
                    frames: '97..195',
                    frameRate: 0
                },
                walkBR: {
                    frames: '98..145',
                    frameRate: 90
                },
                idleBR: {
                    frames: '146...195',
                    frameRate: 0
                },
                walkBL: {
                    frames: '147..194',
                    frameRate: 90
                },
                idleBL: {
                    frames: '195..200',
                    frameRate: 0
                }
            }
        });

        super(data);

        this.playAnimation('idleFR');
        this.playingAnimation = 'idleFR';

        this.id = id;
        this.displayName = displayName;
        this.target = Vector(this.x, this.y);
        track(this);

        if (this.id == sessionStorage.getItem("account_id")) {
            this.me = true;
        }

        this.shadow = Sprite({
            image: imageAssets["bear-shadow"],
            opacity: 0.5,
            y: 96
        });
    }

    update(): void {
        let distance: number = this.target.distance(Vector(this.x, this.y));
        // also cancel movement upon collision! maybe upon collision, set target to position?
        if (distance > 0 && (this.lastDistance == undefined || distance < this.lastDistance)) {
            this.velocity = Vector(this.direction.x * speed, this.direction.y * speed);
            this.lastDistance = distance;
        }
        else if (!this.playingAnimation.includes('idle')) {
            this.playingAnimation = this.playingAnimation.replace('walk', 'idle');
            this.playAnimation(this.playingAnimation);
            this.reportLocation();
            this.target = Vector(this.x, this.y);
            this.dx = 0;
            this.dy = 0;
        }
        super.update();
    }

    draw(): void {
        this.addChild(this.shadow);
        this.shadow.render();
        this.removeChild(this.shadow);

        if (this.me && this.dx == 0 && this.dy == 0) {
            let pointer: any = getPointer();
            let lookTarget: Vector = Vector(pointer.x, pointer.y - 128 / 2);
            let lookDirection: Vector = Vector(lookTarget.x - getCanvas().width / 2, lookTarget.y - getCanvas().height / 2).normalize();
            let left: boolean = lookDirection.x <= 0;
            let right: boolean = !left;
            let backward: boolean = lookDirection.y <= 0;
            let forward: boolean = !backward;
            if (forward && right) {
                this.playingAnimation = 'idleFR';
            }
            if (forward && left) {
                this.playingAnimation = 'idleFL';
            }
            if (backward && right) {
                this.playingAnimation = 'idleBR';
            }
            if (backward && left) {
                this.playingAnimation = 'idleBL';
            }
            this.playAnimation(this.playingAnimation);
        }

        super.draw();

        let nameTag: Text = Text({
            text: this.displayName,
            font: '32px Arial',
            color: 'black',
            width: 128,
            x: 0,
            y: 128,
            anchor: {x: 0, y: 0},
            textAlign: 'center'
        });

        nameTag.render();
        
    }

    setTarget(msg: any): void {
        this.target = Vector(msg["position_x"], msg["position_y"] - 128 / 2);
        this.direction = Vector(this.target.x - this.x, this.target.y - this.y).normalize();
        this.lastDistance = undefined;
        let left: boolean = this.direction.x <= 0;
        let right: boolean = !left;
        let backward: boolean = this.direction.y <= 0;
        let forward: boolean = !backward;
        if (forward && right) {
            this.playingAnimation = 'walkFR';
        }
        if (forward && left) {
            this.playingAnimation = 'walkFL';
        }
        if (backward && right) {
            this.playingAnimation = 'walkBR';
        }
        if (backward && left) {
            this.playingAnimation = 'walkBL';
        }
        this.playAnimation(this.playingAnimation);
    }

    reportLocation(): void {
        let log: HTMLElement = document.getElementById("game-log");
        let message: HTMLParagraphElement = document.createElement("p");
        message.innerHTML = this.displayName + " is now at " + Math.round(this.x) + " on the x-axis and " + Math.round(this.y) + " on the y-axis.";
        log.appendChild(message);
    }

}