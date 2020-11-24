// this might not be the best way to create these objects!
// simply exists to return object that matches server's id
// variant on factory pattern. May result in duplicate code; beware!

import { Player } from './root/player';
import { TileMap } from './root/tile-map'
import { SocketService } from 'src/app/socket/socket.service';
import { GameObject } from 'kontra';

export class ObjectFactory {
    socketService: SocketService;

    constructor(socketService: SocketService) {
        this.socketService = socketService;
    }

    makeObject(objects: any, data: any): GameObject {
        let sceneId: number = data["scene_id"];
        let object: GameObject;
        switch(sceneId) { 
            case 0: { 
                // tile map
                object = new TileMap(data["width"],
                    data["height"], data["layers"], this.socketService);
                break;
            } 
            case 1: { 
                // player
                object = new Player();
                break; 
            }
        }
        return object;
    }
}