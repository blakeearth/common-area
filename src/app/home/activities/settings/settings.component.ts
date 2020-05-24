import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/socket/socket.service';
import { Activity } from '../activity';
import { RoomLinkDirective } from './room-link.directive';
import { RoomLinkComponent } from './room-link/room-link.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, Activity {
  
  @ViewChild(RoomLinkDirective, {static: true}) roomLinkHost: RoomLinkDirective;
  
  header: string = "Settings";
  socketService: SocketService;
  componentFactoryResolver: ComponentFactoryResolver;

  constructor(socketService: SocketService, componentFactoryResolver: ComponentFactoryResolver) {
    this.socketService = socketService;
    this.componentFactoryResolver = componentFactoryResolver
  }

  ngOnInit(): void {
    this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    if (this.socketService.token != null) {
      this.socketService.sendMessage({channel: "settings", type: "request_rooms", token: this.socketService.token});
    }
  }

  onResponseReceived(msg: any): void {
    if (msg["channel"] == "settings") {
      for (let i = 0; i < 9; i++) {
        this.loadRoomLink({roomId: "dssdfsd99sdf", roomName: "Gloria's Room", roomMembers: ["people", "join", "us"]});
      }
    }
  }

  loadRoomLink(data: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoomLinkComponent);

    const viewContainerRef = this.roomLinkHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<RoomLinkComponent>componentRef.instance).data = data;
  }

}
  