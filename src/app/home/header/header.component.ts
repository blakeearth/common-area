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
    if (this.socketService.token != null) {
      this.socketService.sendMessage({channel: "auth", type: "validate_session", token: this.socketService.token});
    }
    else {
      document.location.href = "/auth/sign-in";
    }
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
    let signOutMessage = {channel: "auth", type: "sign_out", token: this.socketService.token}
    this.socketService.sendMessage(signOutMessage)
    sessionStorage.clear();
    document.location.href = "/";
  }

}
