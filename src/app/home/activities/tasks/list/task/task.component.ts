import { Component, OnInit, Input } from '@angular/core';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { SocketService } from 'src/app/socket/socket.service';
import { ListsService } from '../../lists.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() data: any;

  disabled: boolean;
  open: boolean = false;
  editVisible: boolean = false;

  socketService: SocketService;
  listsService: ListsService;

  constructor(socketService: SocketService, listsService: ListsService) {
    this.socketService = socketService;
    this.listsService = listsService;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
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

  openTask(): void {
    if (!this.open) {
      let task: HTMLElement = document.getElementById(this.data.task_id);
      task.classList.add("open");
  
      this.disabled = true;
      this.listsService.setDisabledList(this.data.list_id);
  
      let contents: HTMLElement = document.getElementById(this.data.task_id + "-contents");
      contents.innerHTML = "Inner HTMML";
  
      let element: HTMLElement = document.getElementById(this.data.task_id  + "-full");
      let sectionHeight: number = element.scrollHeight;
        
      element.style.height = sectionHeight + 'px';
      this.socketService.sendMessage({channel: "tasks", type: "request_task", "task_id": this.data.task_id});
      this.open = true;
    }
  }

  closeTask(save: boolean): void {
    let task: HTMLElement = document.getElementById(this.data.task_id);
    task.classList.remove("open");

    this.disabled = false;
    this.listsService.setDisabledList(null);

    let element: HTMLElement = document.getElementById(this.data.task_id  + "-full");
    var sectionHeight = element.scrollHeight;
  
    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';
    
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
      
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 0 + 'px';
      });
    });
    this.open = false;
  }

  onRequestTask(msg: any) {
    if (msg["task_id"] == this.data.task_id) {
      let task: HTMLElement = document.getElementById(this.data.task_id);
      task.classList.add("open");

      this.disabled = true;
      this.listsService.setDisabledList(this.data.list_id);

      let contents: HTMLElement = document.getElementById(this.data.task_id + "-contents");
      contents.innerHTML = msg["contents"];

      let element: HTMLElement = document.getElementById(this.data.task_id  + "-full");
      let sectionHeight: number = element.scrollHeight;
      
      element.style.height = sectionHeight + 'px';
    }
  }
}