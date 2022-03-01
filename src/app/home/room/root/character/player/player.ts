import { imageAssets, Sprite, SpriteSheet, track, Vector, Text, Button, getCanvas, getWorldRect, SpriteClass, getPointer } from 'kontra';
import { RoomComponent } from '../../../room.component';
import { Character } from '../character';

const speed: number = 5;

export class Player extends Character {
    room: RoomComponent;
    id: string;
    displayName: string;
    target: Vector;
    direction: Vector;

    me: boolean;

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


        super(id, displayName, position, {
            type: 'player',
            x: position.x,
            y: position.y,
            dx: 0,
            dy: 0,
            image: spriteSheet.frame[48],
            animations: spriteSheet.animations,
            children: []
        });

        this.room = room;

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
}