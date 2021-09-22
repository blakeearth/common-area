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

    if (this.activeTaskId != null) {
      document.getElementById(this.activeTaskId).classList.remove("active");
    }

    this.activeTaskId = id;
    document.getElementById(this.activeTaskId).classList.add("active");
  }
}
