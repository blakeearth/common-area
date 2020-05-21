import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  socketService: SocketService;

  constructor(socketService: SocketService) {
    this.socketService = socketService;
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
  }

  onResponseReceived(msg: any): void {
    if (msg["password_correct"] != null) {
      if (msg["password_correct"] == false) {
        document.location.href = "/auth/sign-in";
      }
    }
    console.log(msg);
  }

  signOut(): void {
    document.cookie = "token= ; expires=Wed, 09 Feb 2000 12:00:00 UTC";
    let signOutMessage = {channel: "auth", type: "sign_out", token: this.socketService.token}
    this.socketService.sendMessage(signOutMessage)
    document.location.href = "/";
  }

}
