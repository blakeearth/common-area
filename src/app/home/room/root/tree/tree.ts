import { imageAssets, Sprite, SpriteSheet, Vector, SpriteClass, initPointer, track, getCanvas, untrack } from 'kontra';
import { PersistObject } from '../persist-object';

export class Tree extends PersistObject {
    id: string;
    ownerAccountId: string;

    hovered: boolean;

    constructor(id: string, sceneId: number, ownerAccountId: string, position: Vector, rotationDegrees: number, onDown: Function, displayName?: string) {

        let spriteSheet = SpriteSheet({
            image: imageAssets["tree"],
            frameWidth: 128,
            frameHeight: 192,
            animations: {
                walkFR: {
                    frames: '0..0',
                    frameRate: 90
                },
                idleFR: {
                    frames: '1..1',
                    frameRate: 0
                },
                walkFL: {
                    frames: '2..2',
                    frameRate: 90
                },
                idleFL: {
                    frames: '3..3',
                    frameRate: 0
                },
            }
        });

        super(id, sceneId, ownerAccountId, position, onDown, spriteSheet, 128, 192, displayName);

        this.playAnimation("walkFR");

        this.shadow = Sprite({
            image: imageAssets["bear-shadow"],
            opacity: 0.5,
            y: 128,
            x: -16,
            scaleX: 1.25,
            scaleY: 2
        });
    }

    draw(): void {
        this.addChild(this.shadow);
        this.shadow.render();
        this.removeChild(this.shadow);

        //super.render();
        super.draw();
    }
}