import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewChildren, QueryList, ViewContainerRef, ViewRef, ComponentRef } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';
import { TaskDirective } from './task.directive';
import { TaskComponent } from './task/task.component';
import { CdkDragDrop, transferArrayItem, moveItemInArray, CdkDrag, CdkDragStart } from '@angular/cdk/drag-drop';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild(TaskDirective, {static: true}) public taskHost: TaskDirective;

  @Input() data: any;

  @Input() lists: string[];

  public disabled = false;

  public tasks: Map<string, TaskComponent> = new Map<string, TaskComponent>();

  socketService: SocketService;
  listsService: ListsService;
  componentFactoryResolver: ComponentFactoryResolver;

  constructor(socketService: SocketService, listsService: ListsService, componentFactoryResolver: ComponentFactoryResolver) {
    this.socketService = socketService;
    this.listsService = listsService;
    this.componentFactoryResolver = componentFactoryResolver;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    this.socketService.sendMessage({channel: "tasks", type: "request_tasks_for_list", "list_id": this.data.list_id});
    this.listsService.disabledListId.subscribe(listId => this.disableIfThisIs(listId))
    this.listsService.lists[this.data.list_id] = this;
  }

  dropTask(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      if (!(event.currentIndex == event.previousIndex)) {
        this.taskHost.viewContainerRef.move(this.taskHost.viewContainerRef.get(event.previousIndex), event.currentIndex);
        let taskId: string = event.item.data.task_id;
        let data: any = this.listsService.lists[event.previousContainer.id].tasks[taskId].data;
        this.socketService.sendMessage({channel: "tasks", type: "edit_listing", listing_id: data.listing_id, list_id: event.container.id, index: event.currentIndex});
        return
      }
    } else {
      event.previousContainer.removeItem(event.item);
      let taskId: string = event.item.data.task_id;
      let data: any = this.listsService.lists[event.previousContainer.id].tasks[taskId].data;
      data.index = event.currentIndex;
      let previousViewContainerRef: ViewContainerRef = this.listsService.lists[event.previousContainer.id].taskHost.viewContainerRef;
      previousViewContainerRef.remove(event.previousIndex);
      this.listsService.lists[event.container.id].loadTask(data);
      this.socketService.sendMessage({channel: "tasks", type: "edit_listing", listing_id: data.listing_id, list_id: event.container.id, index: event.currentIndex});
    }
  }

  onResponseReceived(msg: any): void {
    if (msg["channel"] == "tasks") {
      if (msg["type"] == "request_tasks_for_list") {
        this.onRequestTasksForList(msg);
      }
      else if (msg["type"] == "add_task") {
        this.onAddTask(msg);
      }
    }
  }

  disableIfThisIs(listId: string) {
    console.log((listId == this.data.list_id))
    this.disabled = (listId == this.data.list_id);
  }

  toggleArrow(): void {
    let dropdownLabel: Element = document.getElementById(this.data.list_id + "-label");
    if (dropdownLabel.innerHTML == "▲") {
      dropdownLabel.innerHTML = "▼";
    }
    else {
      dropdownLabel.innerHTML = "▲";
    }
  }

  onRequestTasksForList(msg: any): void {
    msg["tasks"].sort(function(a: any, b: any) {
      return a.index - b.index;
    });
    msg["tasks"].forEach(data => {
      if (data["list_id"] == this.data.list_id) {
        console.log(data);
        this.loadTask(data);
      }
    });
  }
  
  onAddTask(msg: any): void {
    if (msg["list_id"] == this.data.list_id) {
      this.loadTask(msg);
    }
  }

  loadTask(data: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TaskComponent);

    const viewContainerRef = this.taskHost.viewContainerRef;

    let componentRef: ComponentRef<TaskComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory, data.index);

    let instance: TaskComponent = <TaskComponent>componentRef.instance;
    instance.data = data;
    this.tasks[data.task_id] = instance;
  }

  addTask(): void {
    let newTaskTitleField: HTMLInputElement = <HTMLInputElement> document.getElementById(this.data.list_id  + "-new-task-title-field");
    let title: string = newTaskTitleField.value;
    this.socketService.sendMessage({channel: "tasks", type: "add_task", public: true, active: false, title: title, contents: "", list_id: this.data.list_id, index: 0});
    newTaskTitleField.value = "";
  }

  deleteList(): void {
    this.socketService.sendMessage({channel: "tasks", type: "delete_list", list_id: this.data.list_id});
    this.listsService.lists.delete(this.data.list_id);
  }

  editTitle(): void {
    let titleField: HTMLInputElement = <HTMLInputElement> document.getElementById(this.data.list_id  + "-title-field");
    let title: string = titleField.value;
    titleField.blur();
    this.socketService.sendMessage({channel: "tasks", type: "edit_list_title", list_id: this.data.list_id, title: title});
  }

  startDragging(event: CdkDragStart<string[]>): void {
    event.source.data = this.data;
  }

}
