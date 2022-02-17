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
  participants: any[];
  
  joinedSession: boolean = false;

  rightVisibility: string = "inherit";
  leftVisibility: string = "inherit";

  startButtonDisplay: string = "inherit";
  leaveButtonDisplay: string = "none";

  participantsDisplay: string = "none";

  joinDisplay: string = "none";
  sessions: any[] = [];

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
      console.log(msg);
      this[this.snakeToCamel(msg["type"])](msg);
    });
    this.roomChangeService.roomId.subscribe(roomId => this.changeRoom(roomId));
    this.tasksService.activeTask.subscribe(data => { this.activeTaskData = data; this.activeTask = true});
    this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
    this.participants = [];
  }

  changeRoom(roomId: string): void {
    this.roomId = roomId;
    this.socketService.sendMessage({channel: "timer", type: "request_active_sessions", room_id: this.roomId});
  }

  addTime(event: Event, time: number): void {
    this.timeToSubmit += time;
    this.rightVisibility = "inherit";
    this.leftVisibility = "inherit";
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
    console.log("got a start session");
    if (msg["participants"].includes(sessionStorage.getItem("display_name"))) {
      // I started this session
      this.participants = msg["participants"];
      this.sessionId = msg["session_id"];
      this.timeRemaining = new Date(0, 0, 0, 0, msg["duration"], 0);
      this.timerService.startTimer();
      if (this.timerSubscription != null) this.timerSubscription.unsubscribe();
      this.timerSubscription = this.timerService.timerSource.subscribe(second => this.countdown());
  
      this.leftVisibility = "hidden";
      this.rightVisibility = "hidden";
      this.startButtonDisplay = "none";
    
      // reveal leave session button, participants
      // TODO: the below could absolutely cause glitches if two people choose the same display name
      this.leaveButtonDisplay = "inherit";
  
      this.participantsDisplay = "initial";
    }
    else {
      // someone else started the session, add it to the join zone
      console.log(msg);
      let session: any = msg;
      session.expected_end_time = msg.expected_end_time + "Z";
      this.sessions.push(session);
      console.log(this.sessions);
      if (this.sessions.length > 0) {
        this.joinDisplay = "inherit";
      }
      else {
        this.joinDisplay = "none";
      }
    }
  }

  requestActiveSessions(msg: any): void {
    this.sessions = [];
    for (let session of msg["messages"]) {
      session.expected_end_time = session.expected_end_time + "Z";
      this.sessions.push(session);
    }
    console.log(this.sessions);
    if (this.sessions.length > 0) {
      this.joinDisplay = "inherit";
    }
    else {
      this.joinDisplay = "none";
    }
  }

  joinSession(msg: any): void {
    if (msg["display_name"].includes(sessionStorage.getItem("display_name"))) {
      // I started this session
      this.sessionId = msg["session_id"];
      this.timeRemaining = new Date((new Date(msg["expected_end_time"])).getTime() - Date.now());
      this.timerService.startTimer();
      if (this.timerSubscription != null) this.timerSubscription.unsubscribe();
      this.timerSubscription = this.timerService.timerSource.subscribe(second => this.countdown());
  
      this.leftVisibility = "hidden";
      this.rightVisibility = "hidden";
      this.startButtonDisplay = "none";

      this.joinDisplay = "none";
  
      this.participants = msg["participants"];
  
      // reveal leave session button, participants
      // TODO: the below could absolutely cause glitches if two people choose the same display name
      this.leaveButtonDisplay = "inherit";
  
      this.participantsDisplay = "initial";
    }
    else if (msg["session_id"] == this.sessionId) {
      this.participants.push(msg["display_name"]);
    }
  }

  leaveSession(msg: any): void {
    if (msg["success"] == true && msg["display_name"].includes(sessionStorage.getItem("display_name"))) {
      this.sessionId = msg["session_id"];

      this.socketService.sendMessage({channel: "timer", type: "request_active_sessions", room_id: this.roomId});
      this.leaveButtonDisplay = "none";
      this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit, 0);
      this.timerService.stopTimer();
      if (this.timerSubscription != null) this.timerSubscription.unsubscribe();

      this.leftVisibility = "initial";
      this.rightVisibility = "initial";
      this.startButtonDisplay = "initial";
      this.leaveButtonDisplay = "none";
      this.participantsDisplay = "none";
    }
    else if (msg["session_id"] == this.sessionId) {
      let newParticipants: any[] = [];
      for (let participant of this.participants) {
        if (!participant.includes(msg["display_name"])) newParticipants.push(participant);
      }
      this.participants = newParticipants;
    }
  }

  // TODO END SESSION
  endSession(msg: any) {
    this.sessionId = msg["session_id"];
    this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit, 0);
    this.timerService.stopTimer();
    if (this.timerSubscription != null) this.timerSubscription.unsubscribe();

    this.leftVisibility = "initial";
    this.rightVisibility = "initial";
    this.startButtonDisplay = "initial";
    this.leaveButtonDisplay = "none";
    this.participantsDisplay = "none";
  }

  start(): void {
    this.socketService.sendMessage({channel: "timer", type: "start_session", room_id: this.roomId, consumable: 0, duration: this.timeToSubmit, is_break: false});
  }

  join(sessionId: string): void {
    console.log(sessionId);
    this.socketService.sendMessage({channel: "timer", type: "join_session", room_id: this.roomId, session_id: sessionId});
  }

  leave(): void {
    this.socketService.sendMessage({channel: "timer", type: "leave_session", room_id: this.roomId, session_id: this.sessionId});
  }

  countdown(): void {
    let newDate = new Date(0, 0, 0, 0, this.timeRemaining.getMinutes(), 0);
    if (this.timeRemaining.getSeconds() == 0) {
      if (this.timeRemaining.getMinutes() == 0) {
        this.socketService.sendMessage({channel: "timer", type: "leave_session", room_id: this.roomId, session_id: this.sessionId});
        this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
        this.timerService.stopTimer();
        this.timerSubscription.unsubscribe();
        this.leftVisibility = "inherit";
        this.rightVisibility = "inherit";
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
