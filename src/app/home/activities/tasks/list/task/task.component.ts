import { Component, OnInit, Input, HostListener, AfterViewInit } from '@angular/core';
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

  faTrash = faTrash;

  disabled: boolean;
  open: boolean = false;
  editVisible: boolean = false;

  socketService: SocketService;
  listsService: ListsService;
  tasksService: TasksService;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!document.getElementById(this.data.task_id).contains(event.target) && this.open) {
      this.closeTask();
    }
  }

  constructor(socketService: SocketService, listsService: ListsService, tasksService: TasksService) {
    this.socketService = socketService;
    this.listsService = listsService;
    this.tasksService = tasksService;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
  }

  ngAfterViewInit(): void {
    if (this.data.active == true) {
      this.tasksService.setActiveTask(this.data);
    }
    this.updateTitle();
  }

  onResponseReceived(msg: any): void {
    if (msg["channel"] == "tasks") {
      if (msg["type"] == "request_task") {
        this.onRequestTask(msg);
      }
    }
  }

  updateTitle(): void {
    let title: HTMLTextAreaElement = (document.getElementById(this.data.task_id + "-title") as HTMLTextAreaElement);
    title.style.height = "0";
    title.style.height = (title.scrollHeight + 1) + "px";
    title.style.maxHeight = (title.scrollHeight + 1) + "px";
  }

  updateContents(): void {
    let contents: HTMLTextAreaElement = (document.getElementById(this.data.task_id + "-contents") as HTMLTextAreaElement);
    contents.style.height = "0";
    contents.style.height = (contents.scrollHeight + 16) + "px";
  }

  startDragging(event: CdkDragStart<string[]>): void {
    event.source.data = this.data;
  }

  openTask(): void {
    if (!this.open) {
      let task: HTMLElement = document.getElementById(this.data.task_id);
      task.classList.add("open");

      let full: HTMLElement = document.getElementById(this.data.task_id + "-full");
      full.classList.add("full-shown");

      let removeTask: HTMLElement = document.getElementById(this.data.task_id + "-remove-task");
      removeTask.classList.remove("not-displayed");
  
      this.disabled = true;
      
      if (this.listsService.disabledLists.has(this.data.list_id)) {
        let num = this.listsService.disabledLists.get(this.data.list_id);
        this.listsService.disabledLists.set(this.data.list_id, num + 1);
      }
      else {
        this.listsService.disabledLists.set(this.data.list_id, 1);
      }

      this.socketService.sendMessage({channel: "tasks", type: "request_task", "task_id": this.data.task_id});
      this.open = true;
    }
  }

  saveTitle(): void {
    let titleField: HTMLInputElement = document.getElementById(this.data.task_id + "-title") as HTMLInputElement;
    titleField.blur();
    let title: string = titleField.value;
    this.socketService.sendMessage({channel: "tasks", type: "edit_task_title", task_id: this.data.task_id, title: title});
  }

  saveDescription(): void {
    let contents: HTMLInputElement = document.getElementById(this.data.task_id + "-contents") as HTMLInputElement;
    let description: string = contents.value;
    this.socketService.sendMessage({channel: "tasks", type: "edit_task_contents", task_id: this.data.task_id, contents: description});
  }

  closeTask(): void {
    let task: HTMLElement = document.getElementById(this.data.task_id);
    task.classList.remove("open");

    let full: HTMLElement = document.getElementById(this.data.task_id + "-full");
    full.classList.remove("full-shown");

    let removeTask: HTMLElement = document.getElementById(this.data.task_id + "-remove-task");
    removeTask.classList.add("not-displayed");

    this.disabled = false;

    let num = this.listsService.disabledLists.get(this.data.list_id);
    console.log(num);
    if (num == 1) {
      this.listsService.disabledLists.delete(this.data.list_id);
    }
    else {
      this.listsService.disabledLists.set(this.data.list_id, num - 1);
    }

    this.open = false;
    this.socketService.sendMessage({channel: "tasks", type: "request_task", "task_id": this.data.task_id});
  }

  removeTask() {
    this.socketService.sendMessage({channel: "tasks", type: "delete_task", "task_id": this.data.task_id});
  }

  onRequestTask(msg: any) {
    if (msg["task_id"] == this.data.task_id) {
      let contents: HTMLElement = document.getElementById(this.data.task_id + "-contents");
      contents.innerHTML = msg["contents"];
      this.updateContents();
    }
  }

  setActive() {
    this.tasksService.setActiveTask(this.data);
    this.socketService.sendMessage({channel: "tasks", type: "set_listing_active", listing_id: this.data.listing_id});
  }

}