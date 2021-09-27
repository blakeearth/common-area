import { Component, OnInit, Input, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { Location } from '@angular/common';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { SocketService } from 'src/app/socket/socket.service';
import { ListsService } from '../../lists.service';
import { TasksService } from '../../../tasks.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

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

  onResponseReceived(msg: any): void {
    if (msg["channel"] == "tasks") {
      if (msg["type"] == "request_task") {
        this.onRequestTask(msg);
      }
      if (msg["type"] == "set_listing_active") {
        if (msg["listing_id"] == this.data.listing_id) this.data.active = msg["active"];
        else this.data.active = false;
      }
      if (msg["type"] == "set_task_public") {
        if (msg["task_id"] == this.data.task_id) this.data.public = msg["public"];
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