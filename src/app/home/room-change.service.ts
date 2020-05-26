import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomChangeService {

  changeSource: Subject<string> = new Subject<any>();
  public roomId: Observable<string> = this.changeSource.asObservable();

  constructor() { }

  setRoom(roomId: string): void {
    this.changeSource.next(roomId);
  }
}
