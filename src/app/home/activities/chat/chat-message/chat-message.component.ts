import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() data: any;

  socketService: SocketService;

  constructor(socketService: SocketService) {
    this.socketService = socketService;
  }

  ngOnInit(): void {
  }

}
