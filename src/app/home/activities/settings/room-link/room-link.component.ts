import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';
import { NgForm } from '@angular/forms'

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

  enterRoom(roomId: string, title: string): void {
    this.socketService.sendMessage({channel: "settings", type: "enter_room", room_id: roomId});
    sessionStorage.setItem("room_id", roomId);
    sessionStorage.setItem("room_title", title);
  }

}
