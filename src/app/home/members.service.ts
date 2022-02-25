import { Injectable } from '@angular/core';
import { Vector } from 'kontra';
import { Observable, Subject } from 'rxjs';
import { RoomComponent } from './room/room.component';
import { Player } from './room/root/player/player';

/*

Responsible for:
- keeping track of all online members
- keeping track of which members are working
- keeping track of which members are idling?
- opening player tooltips I think (that way, it's easier to do that from chat or comments)

*/

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  addedMemberSource: Subject<Player> = new Subject<Player>();
  removedMemberSource: Subject<Player> = new Subject<Player>();

  public addedMember: Observable<Player> = this.addedMemberSource.asObservable();
  public removedMember: Observable<Player> = this.removedMemberSource.asObservable();

  members: Set<Player> = new Set<Player>();

  room: RoomComponent;

  constructor() { }

  setRoom(room: RoomComponent) {
    this.room = room;
  }

  addMember(member: Player): void {
    this.addedMemberSource.next(member);
    this.members.add(member);
  }

  removeMember(member: Player): void {
    this.removedMemberSource.next(member);
    this.members.delete(member);
  }

  getMembers(): Set<Player> {
    return this.members;
  }

  openTooltip(displayName: string, accountId: string): void {
    this.room.openPlayerTooltip(displayName, accountId, Vector(window.innerWidth / 2, window.innerHeight / 2))
  }
}
