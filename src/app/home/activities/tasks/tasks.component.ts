import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewRef, ComponentRef } from '@angular/core';
import { Location } from '@angular/common'
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Activity } from '../activity';
import { ListDirective } from './list.directive';
import { ListComponent } from './list/list.component';
import { SocketService } from 'src/app/socket/socket.service';
import { ListsService } from './lists.service';
import { Handler } from 'src/app/handler';
import { ActivatedRoute } from '@angular/router';
import { TaskEditorPopupDirective } from './task-editor-popup.directive';
import { TaskEditorPopupComponent } from './task-editor-popup/task-editor-popup.component';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent extends Handler implements OnInit, Activity {

  @ViewChild(ListDirective, {static: true}) listHost: ListDirective;
  @ViewChild(TaskEditorPopupDirective, { static: true }) public taskEditorPopupHost: TaskEditorPopupDirective;

  header: string = "Tasks";

  lists: string[] = [];
  listViewRefs: Map<string, ViewRef> = new Map<string, ViewRef>();

  socketService: SocketService;
  listsService: ListsService;
  componentFactoryResolver: ComponentFactoryResolver;

  taskId: string;

  route: ActivatedRoute;

  location: Location;

  constructor(socketService: SocketService, listsService: ListsService, componentFactoryResolver: ComponentFactoryResolver, route: ActivatedRoute, location: Location) {
    super();
    this.socketService = socketService;
    this.listsService = listsService;
    this.componentFactoryResolver = componentFactoryResolver;
    this.location = location;
    this.route = route;
  }

  ngOnInit(): void {
    if (!this.socketService.channelIsRegistered("tasks")) this.socketService.register("tasks");
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    this.socketService.sendMessage({channel: "tasks", type: "request_lists"});

    this.location.onUrlChange(this.handleTask.bind(this));
    this.handleTask();
  }

  onResponseReceived(msg: any): void {
    if (msg["channel"] == "tasks") {
      if (msg["type"] == "request_lists") {
        this.onRequestLists(msg);
      }
      else if (msg["type"] == "add_list") {
        this.loadList({title: msg["title"], index: msg["index"], list_id: msg["list_id"]})
      }
      else if (msg["type"] == "delete_list") {
        this.onDeleteList(msg["list_id"]);
      }
      else if (msg["type"] == "request_task") {
        this.onRequestTask(msg);
      }
    }
  }

  onRequestLists(msg: any): void {
    msg["lists"].sort(function(a: any, b: any) {
      return a.index - b.index;
    });
    msg["lists"].forEach(data => {
      console.log(data);
      this.loadList(data);
    });
  }

  loadList(data: any): void {
    this.lists.push(data.list_id);
    
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ListComponent);

    const viewContainerRef = this.listHost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory, data.index);
    let instance: ListComponent = <ListComponent>componentRef.instance
    instance.data = data;
    instance.lists = this.lists;
    this.listsService.lists.set(data.list_id, instance);
    this.listViewRefs.set(data.list_id, componentRef.hostView);
  }

  addList(): void {
    let newListTitleField: HTMLInputElement = <HTMLInputElement> document.getElementById("new-list-title-field");
    let title: string = newListTitleField.value;
    this.socketService.sendMessage({channel: "tasks", type: "add_list", title: title, index: this.lists.length});
    newListTitleField.value = "";
  }

  onDeleteList(listId: string) {
    let index: number = this.listHost.viewContainerRef.indexOf(this.listViewRefs.get(listId));
    this.listHost.viewContainerRef.remove(index);
    // TODO: the below line is not working
    this.listsService.lists.delete(listId);
  }

  handleTask() {
    if (MenuComponent.getActivity(this.location.path()) == "tasks" && this.location.path().split('/').length > 3) {
      this.taskId = this.location.path().split('/')[3];
      this.socketService.sendMessage({channel: "tasks", type: "request_task", "task_id": this.taskId});
    }
  }

  onRequestTask(taskData: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TaskEditorPopupComponent);

    const viewContainerRef = this.taskEditorPopupHost.viewContainerRef;

    let componentRef: ComponentRef<TaskEditorPopupComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory);

    let instance: TaskEditorPopupComponent = <TaskEditorPopupComponent>componentRef.instance;
    instance.data = taskData;
    instance.onClose = this.closeTask.bind(this);
  }

  closeTask(event: Event) {
    if ((event.target as HTMLElement).classList.contains("modal") ||
      (event.target as HTMLElement).classList.contains("close-task") ||
      (event.target as HTMLElement).classList.contains("remove-task")) {
      const viewContainerRef = this.taskEditorPopupHost.viewContainerRef;
      viewContainerRef.clear();
      this.location.replaceState('/home/tasks');
    }
  }

  dropList(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      this.listHost.viewContainerRef.move(this.listHost.viewContainerRef.get(event.previousIndex), event.currentIndex);
      this.socketService.sendMessage({channel: "tasks", type: "move_list", list_id: event.item.data.list_id, index: event.currentIndex});
    }
  }
}
