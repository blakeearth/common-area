import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Activity } from '../activity';
import { ListDirective } from './list.directive';
import { ListComponent } from './list/list.component';
import { SocketService } from 'src/app/socket/socket.service';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, Activity {

  @ViewChild(ListDirective, {static: true}) listHost: ListDirective;

  header: string = "Tasks";

  lists: string[] = [];
  listViewRefs: Map<string, ViewRef> = new Map<string, ViewRef>();

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
    this.socketService.sendMessage({channel: "tasks", type: "request_lists"});
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
        this.deleteList(msg["list_id"]);
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
    this.listViewRefs.set(data.list_id, componentRef.hostView)
  }

  addList(): void {
    let newListTitleField: HTMLInputElement = <HTMLInputElement> document.getElementById("new-list-title-field");
    let title: string = newListTitleField.value;
    this.socketService.sendMessage({channel: "tasks", type: "add_list", title: title, index: this.lists.length});
    newListTitleField.value = "";
  }

  deleteList(listId: string) {
    let index: number = this.listHost.viewContainerRef.indexOf(this.listViewRefs.get(listId));
    this.listHost.viewContainerRef.remove(index);
    // TODO: the below line is not working
    this.listsService.lists.delete(listId);
  }

  dropList(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      this.listHost.viewContainerRef.move(this.listHost.viewContainerRef.get(event.previousIndex), event.currentIndex);
      console.log(event.previousIndex);
      console.log(event.currentIndex);
      this.socketService.sendMessage({channel: "tasks", type: "move_list", list_id: event.item.data.list_id, index: event.currentIndex});
    }
  }
}
