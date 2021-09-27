import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SocketService } from 'src/app/socket/socket.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  socketService: SocketService;

  activeTaskSource: Subject<any>;
  public activeTask: Observable<any>;

  activeTaskId: string;

  constructor(socketService: SocketService) {
    this.socketService = socketService;
    this.activeTaskSource = new Subject<any>();
    this.activeTask = this.activeTaskSource.asObservable();
  }

  setActiveTask(data: any) {
    let id: string = data.task_id;

    this.activeTaskSource.next(data);

    this.activeTaskId = id;
  }
}
