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
    this.socketService.sendMessage({channel: "auth", type: "sign_in_with_token", token: sessionStorage.getItem("token")});
  }

  onResponseReceived(msg: any): void {
    if (msg["type"] == "sign_in_with_token" && msg["success"] != null) {
      console.log(msg);
      if (msg["success"] == false) {
        //document.location.href = "/auth/sign-in";
      }
    }
    /*else if (msg["password_correct"] != null) {
      if (msg["password_correct"] == false) {
        document.location.href = "/auth/sign-in";
      }
    }*/
  }

  signOut(): void {
    let signOutMessage = {channel: "auth", type: "sign_out"}
    this.socketService.sendMessage(signOutMessage)
    sessionStorage.clear();
    document.location.href = "/";
  }

}
