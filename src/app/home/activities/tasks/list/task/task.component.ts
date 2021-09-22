import { Component, OnInit, Input, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { Location } from '@angular/common';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { SocketService } from 'src/app/socket/socket.service';
import { ListsService } from '../../lists.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TasksService } from '../../../tasks.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  @Input() isListing: boolean;


  socketService: SocketService;
  listsService: ListsService;
  tasksService: TasksService;

  componentFactoryResolver: ComponentFactoryResolver;

  location: Location;

  constructor(socketService: SocketService, listsService: ListsService, tasksService: TasksService, location: Location) {
    this.socketService = socketService;
    this.listsService = listsService;
    this.tasksService = tasksService;
    this.location = location;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
  }

  ngAfterViewInit(): void {
    if (this.data.active == true) {
      this.tasksService.setActiveTask(this.data);
    }
  }

  onResponseReceived(msg: any): void {
    if (msg["channel"] == "tasks") {
      if (msg["type"] == "request_task") {
        this.onRequestTask(msg);
      }
    }
  }

  startDragging(event: CdkDragStart<string[]>): void {
    event.source.data = this.data;
  }

  openTask(event: Event): void {
    event.preventDefault();
    if (!(this.data.task_id == undefined)) this.location.replaceState('/home/tasks/' + this.data.task_id);
  }

  removeTask() {
    this.socketService.sendMessage({ channel: "tasks", type: "delete_task", "task_id": this.data.task_id });
  }

  onRequestTask(msg: any) {
    if (msg["task_id"] == this.data.task_id) {
      this.data = msg;
    }
  }
}