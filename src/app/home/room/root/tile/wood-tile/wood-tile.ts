import { imageAssets, Sprite, SpriteSheet, Vector, SpriteClass, getCanvas, track, untrack } from 'kontra';
import { PersistObject } from '../../persist-object';

export class WoodTile extends PersistObject {
    id: string;
    ownerAccountId: string;

    hovered: boolean;

    constructor(id: string, sceneId: number, ownerAccountId: string, position: Vector, variant: number, onDown: Function, displayName?: string) {
        let spriteSheet = SpriteSheet({
            image: imageAssets["tiles"],
            frameWidth: 160,
            frameHeight: 160,
            animations: {
                "0": {
                    frames: '0..0',
                    frameRate: 0
                }
            }
        });
        
        super(id, sceneId, ownerAccountId, position, variant, onDown, spriteSheet, 128, 128, displayName);
        this.renderModifier = -10000;

        this.playAnimation("0");
    }

    draw(): void {
        if (this.hovered) this.context.filter = "grayscale(50%) brightness(120%)";
        super.draw();
    }
}