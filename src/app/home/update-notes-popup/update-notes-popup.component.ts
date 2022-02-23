import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-update-notes-popup',
  templateUrl: './update-notes-popup.component.html',
  styleUrls: ['./update-notes-popup.component.css']
})
export class UpdateNotesPopupComponent implements OnInit {
  

  data: any;
  onClose: Function;

  socketService: SocketService;

  socketSubscription: Subscription;
  

  constructor(socketService: SocketService) {
    this.socketService = socketService;
  }

  ngOnInit(): void {
    let modalContent: HTMLElement = document.getElementsByClassName("modal-content")[0] as HTMLElement;

    modalContent.focus();
    this.socketSubscription = this.socketService.channelReply.get("tasks").subscribe(msg => this.onResponseReceived(msg));
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  onResponseReceived(msg: any): void {
    if (msg["channel"] == "tasks") {
      if (msg["type"] == "add_tagging") {

      }
    }
  }

}
