import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';

@Component({
  selector: 'app-room-link',
  templateUrl: './room-link.component.html',
  styleUrls: ['./room-link.component.css']
})
export class RoomLinkComponent implements OnInit {

  @Input() data: any;

  socketService: SocketService

  constructor(socketService: SocketService) {
    this.socketService = socketService;
  }

  ngOnInit(): void {
  }

  joinRoom(roomId: string): void {
    this.socketService.sendMessage({channel: "settings", type: "join_room", token: this.socketService.token, room_id: roomId});
  }

}
