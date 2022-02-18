// this might not be the best way to create these objects!
// simply exists to return object that matches server's id
// variant on factory pattern. May result in duplicate code; beware!

import { Player } from './root/player/player';
import { TileMap } from './root/tile-map'
import { SocketService } from 'src/app/socket/socket.service';
import { GameObject, Vector } from 'kontra';
import { RoomComponent } from './room.component';
import { Tree } from './root/tree/tree';

export class ObjectFactory {
    socketService: SocketService;
    room: RoomComponent;

    constructor(room: RoomComponent, socketService: SocketService) {
        this.room = room;
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
                object = new Player(this.room, data["id"], data["display_name"], Vector(data["translation_x"], data["translation_y"]));

                /* create the task popup
                OMITTED FOR USER TESTS--WILL ASK USERS WHAT THEY WOULD DO INSTEAD
                
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TaskPopupComponent);

                const viewContainerRef = this.taskHost.viewContainerRef;
            
                let componentRef: ComponentRef<TaskPopupComponent>;
            
                componentRef = viewContainerRef.createComponent(componentFactory, data.index);
            
                let instance: TaskPopupComponent = <TaskPopupComponent>componentRef.instance;
                instance.data = data;
                this.tasks.set(data.task_id, instance);
                this.taskViewRefs.set(data.task_id, componentRef.hostView);
                */
                break; 
            }
            case 2:
                {
                    object = new Tree(data["id"], Vector(data["translation_x"], data["translation_y"]), data["rotation_degrees"]);
                    break;
            }
        }
        return object;
    }
}