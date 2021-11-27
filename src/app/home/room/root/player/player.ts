import { imageAssets, Sprite, SpriteSheet, track, Vector, Text, Button, getCanvas, getWorldRect } from 'kontra';
import { RoomComponent } from '../../room.component';

const speed: number = 5;

export class Player extends Sprite.class {
    room: RoomComponent;
    id: string;
    displayName: string;
    target: Vector;
    direction: Vector;

    playingAnimation: string;

    shadow: Sprite;

    constructor(room: RoomComponent, id: string, displayName: string, position: Vector) {
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

        super({
            type: 'player',
            x: position.x,
            y: position.y,
            dx: 0,
            dy: 0,
            image: spriteSheet.frame[48],
            animations: spriteSheet.animations,
            children: [new Button({
                // button properties
                
                room: room,
                persistObjectId: id,
                
                padX: 64,
                padY: 64,
                color: "transparent",
                onFocus: function() {
                    // read out to the screen reader
                },
                render: function() {
                    if (this.pressed) {
                        if (!(this.previouslyPressed == true)) {
                            this.previouslyPressed = true;
                            // open their little profile
                            // with current task etc.
                            console.log(displayName);
                            room.openPlayerTooltip(displayName, id, Vector(getWorldRect(this).x, getWorldRect(this).y));
                        }
                    }
                    else {
                        if (this.previouslyPressed == true) {
                            this.previouslyPressed = false;
                            // close the tooltip specifically (must be THIS one--what about othr players?)
                        }
                    }


                    if (this.hovered) {
                        if (!(this.previouslyHovered == true)) {
                            this.previouslyHovered = true;
                            getCanvas().style.cursor = "pointer";
                        }
                    }
                    else {
                        if (this.previouslyHovered == true) {
                            this.previouslyHovered = false;
                            getCanvas().style.cursor = "initial";
                        }
                    }

                    if (this.focused) {
                        this.context.setLineDash([8,10]);
                        this.context.lineWidth = 3;
                        this.context.strokeStyle = 'red';
                        this.context.strokeRect(0, 0, this.width, this.height);
                      }
                }
            })]
        });

        this.room = room;

        this.playAnimation('idleFR');
        this.playingAnimation = 'idleFR';

        this.id = id;
        this.displayName = displayName;
        this.target = Vector(this.x, this.y);
        track(this);

        this.shadow = Sprite({
            image: imageAssets["bear-shadow"],
            opacity: 0.5,
            y: 96
        });
    }

    update(): void {
        let distance: number = this.target.distance(Vector(this.x, this.y));
        // also cancel movement upon collision! maybe upon collision, set target to position?
        if (distance > 4) {
            this.velocity = Vector(this.direction.x * speed, this.direction.y * speed);
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

        super.draw();

        let nameTag: Text = new Text({
            text: this.displayName,
            font: '16px Arial',
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
        this.target = Vector(msg["position_x"] - 128 / 2, msg["position_y"] - 128 / 2);
        this.direction = Vector(this.target.x - this.x, this.target.y - this.y).normalize();
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