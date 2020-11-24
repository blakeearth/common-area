import { GameObject, Vector } from 'kontra';
import { SocketService } from 'src/app/socket/socket.service';

export abstract class Knode extends GameObject.class {
    [key: string]: any; // type for unknown keys.

    free() {
        this.parent.removeChild(this);
        for (let child of this.children) {
            child.free();
        }
        // remove object from memory?
    }

    update(): void {
        for (let child of this.children) {
            child.update();
        }
    }

    render(): void {
        for (let child of this.children) {
            child.render();
        }
    }
}