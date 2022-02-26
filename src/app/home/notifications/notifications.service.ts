import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notificationsSource: Subject<string> = new Subject<any>();
  public roomId: Observable<string> = this.notificationsSource.asObservable();

  audio: HTMLAudioElement;


  constructor() {
    this.audio = new Audio();
    this.audio.src = "../../../assets/notifications/notification.ogg";
    this.audio.load();
  }

  pushNotification(activity: string): void {
    this.notificationsSource.next(activity);
    this.audio.play();
  }
}
