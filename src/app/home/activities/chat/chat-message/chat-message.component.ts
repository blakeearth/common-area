import { Component, OnInit, Input } from '@angular/core';
import { MembersService } from 'src/app/home/members.service';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() data: any;

  socketService: SocketService;
  membersService: MembersService;

  constructor(socketService: SocketService, membersService: MembersService) {
    this.socketService = socketService;
    this.membersService = membersService;
  }

  ngOnInit(): void {
  }

  openTooltip(): void {
    this.membersService.openTooltip(this.data.display_name, this.data.account_id);
  }

}
