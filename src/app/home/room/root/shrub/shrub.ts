import { imageAssets, Sprite, SpriteSheet, Vector, SpriteClass, getCanvas, track, untrack } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

export class Shrub extends SpriteClass {
    id: string;

    constructor(id: string, sceneId: string, position: Vector, rotationDegrees: number, onDown: Function) {
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
        
        super({
            x: position.x,
            y: position.y,
            width: 180,
            height: 180,
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

    setEraserMode(eraserMode: boolean) {
        if (eraserMode) track(this);
        else untrack(this);
    }
}