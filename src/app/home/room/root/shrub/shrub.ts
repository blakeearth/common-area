import { imageAssets, Sprite, SpriteSheet, Vector, SpriteClass, getCanvas, track, untrack } from 'kontra';
import { PersistObject } from '../persist-object';

export class Shrub extends PersistObject {
    id: string;
    ownerAccountId: string;

    hovered: boolean;

    constructor(id: string, sceneId: number, ownerAccountId: string, position: Vector, rotationDegrees: number, onDown: Function, displayName?: string) {
        let spriteSheet = SpriteSheet({
            image: imageAssets["shrub"],
            frameWidth: 180,
            frameHeight: 180,
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
        
        super(id, sceneId, ownerAccountId, position, onDown, spriteSheet, 180, 180, displayName);

        this.playAnimation("walkFR");

        this.shadow = Sprite({
            image: imageAssets["bear-shadow"],
            opacity: 0.5,
            y: 90,
            x: -36,
            scaleX: 2,
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