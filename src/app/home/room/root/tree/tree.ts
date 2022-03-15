import { imageAssets, Sprite, SpriteSheet, Vector, SpriteClass, initPointer, track, getCanvas, untrack } from 'kontra';

export class Tree extends SpriteClass {
    id: string;
    ownerAccountId: string;

    constructor(id: string, sceneId: string, ownerAccountId: string, position: Vector, rotationDegrees: number, onDown: Function) {

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

        initPointer();
        
        super({
            type: 'player',
            x: position.x,
            y: position.y,
            width: 128,
            height: 192,
            image: spriteSheet.frame[0],
            animations: spriteSheet.animations,
            onDown: function() {
                onDown(this);
            },
            onUp: function() {

            },
            onOver: function() {
                getCanvas().style.cursor = "pointer";
            },
            onOut: function() {
                getCanvas().style.cursor = "default";
            }
        });

        this.playAnimation("walkFR");

        this.id = id;
        this.sceneId = sceneId;
        this.ownerAccountId = ownerAccountId;

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

    setEraserMode(eraserMode: boolean) {
        if (eraserMode) track(this);
        else untrack(this);
    }
}