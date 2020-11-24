// this might not be the best way to create these objects!
// simply exists to return Knode that matches server's id
// variant on factory pattern. May result in duplicate code; beware!

import { Knode } from './knode';
import { Player } from './root/player';
import { TileMap } from './root/tile-map'
import { Root } from './root/root'
import { SocketService } from 'src/app/socket/socket.service';


export class KnodeFactory {
    socketService: SocketService;

    constructor(socketService: SocketService) {
        this.socketService = socketService;
    }

    makeKnode(objects: any, data: any): Knode {
        let sceneId: number = data["scene_id"];
        let knode: Knode;
        switch(sceneId) { 
            case 0: { 
                // tile map
                knode = new TileMap(objects[data["parent_id"]], data["width"],
                    data["height"], data["layers"], this.socketService);
                break;
            } 
            case 1: { 
                // player
                knode = new Player(objects[data["parent_id"]]);
                break; 
            }
        }
        return knode;
    }
}