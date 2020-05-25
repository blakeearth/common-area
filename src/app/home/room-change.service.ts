import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomChangeService {

  changeSource: BehaviorSubject<any> = new BehaviorSubject<any>({"initialized": true});
  public roomId: Observable<any> = this.changeSource.asObservable();

  constructor() { }

  setRoom(roomId: string) {
    this.changeSource.next(roomId);
  }
}
