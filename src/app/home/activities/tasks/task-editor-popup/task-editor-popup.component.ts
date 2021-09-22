import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-task-editor-popup',
  templateUrl: './task-editor-popup.component.html',
  styleUrls: ['./task-editor-popup.component.css']
})
export class TaskEditorPopupComponent implements OnInit {

  data: any;
  owner: boolean;
  onClose: Function;

  enteredTitle: string;
  enteredDescription: string;

  isEditingTitle: boolean = true;

  socketService: SocketService;

  constructor(socketService: SocketService) {
    this.socketService = socketService;
  }

  ngOnInit(): void {
    this.enteredTitle = this.data.title || "Untitled task";
    this.owner = this.data.account_id == sessionStorage.getItem("accountId");
    this.enteredDescription = this.data.contents;
    let modalContent: HTMLElement = document.getElementsByClassName("modal-content")[0] as HTMLElement;
    modalContent.focus();
  }

  editTitle(): void {
    let titleField: HTMLInputElement = document.getElementById("task-title-field") as HTMLInputElement;
    this.enteredTitle = this.data.title;

    console.log(titleField.value);

    this.isEditingTitle = true;
  }

  saveTitle(): void {
    let titleField: HTMLInputElement = document.getElementById("task-title-field") as HTMLInputElement;
    if (this.enteredTitle != undefined) {
      if (titleField == document.activeElement) titleField.blur();
  
      this.data.title = this.enteredTitle;
  
      this.isEditingTitle = false;
      this.socketService.sendMessage({ channel: "tasks", type: "edit_task_title", task_id: this.data.task_id, title: this.enteredTitle });
    }
  }

  saveDescription(): void {
    if (this.enteredDescription != undefined) {  
      this.data.contents = this.enteredDescription;
  
      this.socketService.sendMessage({channel: "tasks", type: "edit_task_contents", task_id: this.data.task_id, contents: this.enteredDescription});
    }
  }

  changeActive(): void {
    console.log(this.data.listing_id);
    if (this.data.active == false) {
      this.socketService.sendMessage({channel: "tasks", type: "set_listing_active", listing_id: this.data.listing_id});
    }
  }

  changePublic(): void {

  }

  removeTask(event: Event): void {
    this.onClose(event);
    this.socketService.sendMessage({channel: "tasks", type: "delete_task", task_id: this.data.task_id, title: this.enteredTitle});
  }

}
