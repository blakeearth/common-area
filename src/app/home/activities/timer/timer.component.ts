import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { RoomChangeService } from '../../room-change.service';
import { Activity } from '../activity';
import { TasksService } from '../tasks.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent extends Handler implements OnInit, Activity {
  header: string = "Timer";

  tabs: Array<string> = ["host"];

  socketService: SocketService;

  roomChangeService: RoomChangeService;

  roomId: string;

  tasksService: TasksService;
  activeTaskData: any = {"task_id": null, "title": "You need an active task to participate. Select one from the tasks tab."};
  activeTask: boolean = false;

  timerService: TimerService;
  timeRemaining: Date;
  timerSubscription: Subscription;

  timeToSubmit: number = 25;
  sessionId: string;
  participants: any;
  
  joinedSession: boolean = false;

  rightVisibility: string = "visible";
  leftVisibility: string = "visible";

  startButtonDisplay: string = "inherit";
  joinButtonDisplay: string = "none";
  leaveButtonDisplay: string = "none";

  participantsDisplay: string = "none";

  constructor(socketService: SocketService, roomChangeService: RoomChangeService, tasksService: TasksService, timerService: TimerService) {
    super();
    this.socketService = socketService;
    this.roomChangeService = roomChangeService;
    this.tasksService = tasksService;
    this.timerService = timerService;
  }

  ngOnInit(): void {
    if (!this.socketService.channelIsRegistered("timer")) this.socketService.register("timer");
    this.socketService.channelReply.get("timer").subscribe(msg => {
      this[this.snakeToCamel(msg["type"])](msg);
    });
    this.roomChangeService.roomId.subscribe(roomId => this.changeRoom(roomId));
    this.tasksService.activeTask.subscribe(data => { this.activeTaskData = data; this.activeTask = true});
    this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
  }

  changeRoom(roomId: string): void {
    this.roomId = roomId;
  }

  addTime(event: Event, time: number): void {
    this.timeToSubmit += time;
    this.rightVisibility = "visible";
    this.leftVisibility = "visible";
    if (this.timeToSubmit > 45 || this.timeToSubmit < 10) this.timeToSubmit -= time;
    if (this.timeToSubmit == 45) {
      this.rightVisibility = "hidden";
    }
    else if (this.timeToSubmit == 10) {
      this.leftVisibility = "hidden";
    }
    this.timeRemaining.setMinutes(this.timeToSubmit);
    this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
  }

  // start a session (from the server)
  // remember this can come from anyone!
  startSession(msg: any): void {
    this.sessionId = msg["session_id"];
    this.timeRemaining = new Date(0, 0, 0, 0, msg["duration"], 0);
    this.timerService.startTimer();
    if (this.timerSubscription != null) this.timerSubscription.unsubscribe();
    this.timerSubscription = this.timerService.timerSource.subscribe(second => this.countdown());

    this.leftVisibility = "hidden";
    this.rightVisibility = "hidden";
    this.startButtonDisplay = "none";
    this.joinButtonDisplay = "none";

    this.participants = msg["participants"];

    // reveal leave session button, participants
    // TODO: the below could absolutely cause glitches if two people choose the same display name
    if (this.participants.includes(sessionStorage.getItem("display_name"))) this.leaveButtonDisplay = "inherit";

    this.participantsDisplay = "initial";


  }

  joinSession(msg: any): void {
    
  }

  leaveSession(msg: any): void {
    if (msg["success"] == true) {
      this.sessionId = msg["session_id"];

      this.joinButtonDisplay = "inherit";
      this.leaveButtonDisplay = "none";
    }
  }

  // TODO END SESSION
  endSession(msg: any) {

  }

  start(): void {
    this.socketService.sendMessage({channel: "timer", type: "start_session", room_id: this.roomId, consumable: 0, duration: this.timeToSubmit, is_break: false});
  }

  join(): void {

  }

  leave(): void {
    this.socketService.sendMessage({channel: "timer", type: "leave_session", room_id: this.roomId, session_id: this.sessionId});
  }

  countdown(): void {
    let newDate = new Date(0, 0, 0, 0, this.timeRemaining.getMinutes(), 0);
    if (this.timeRemaining.getSeconds() == 0) {
      if (this.timeRemaining.getMinutes() == 0) {
        this.socketService.sendMessage({channel: "timer", type: "leave_session", room_id: this.roomId, consumable: 0, duration: 25, is_break: false});
        this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
        this.timerService.stopTimer();
        this.timerSubscription.unsubscribe();
        this.leftVisibility = "visible";
        this.rightVisibility = "visible";
      }
      else {
        newDate.setSeconds(59);
        newDate.setMinutes(this.timeRemaining.getMinutes() - 1);
      }
    }
    else {
      newDate.setSeconds(this.timeRemaining.getSeconds() - 1);
    }
    this.timeRemaining = newDate;
  }

}
