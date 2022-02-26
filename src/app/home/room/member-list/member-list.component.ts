import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Vector } from 'kontra';
import { MembersService } from '../../members.service';
import { RoomComponent } from '../room.component';
import { Player } from '../root/player/player';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  onlineMembers: Set<Player> = new Set<Player>();
  onlineMembersList: Player[] = [];

  offlineMembers: Set<{displayName: string, id: string}> = new Set<{displayName: string, id: string}>();
  offlineMembersList: {displayName: string, id: string}[] = [];

  @Input() room: RoomComponent;

  membersService: MembersService;

  constructor(membersService: MembersService) {
    this.membersService = membersService;
  }

  ngOnInit(): void {
    this.membersService.addedMember.subscribe(member => {
      this.onlineMembers.add(member);
      this.onlineMembersList = Array.from(this.onlineMembers.values());
    });
    this.membersService.removedMember.subscribe(member => {
      this.onlineMembers.delete(member);
      this.onlineMembersList = Array.from(this.onlineMembers.values());
    });
    this.membersService.offlineMembers.subscribe(members => {
      this.offlineMembers = members;
      this.offlineMembersList = Array.from(this.offlineMembers.values());
    });
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  openTooltip(event: Event, member: {displayName: string, id: string}) {
    (event.target as HTMLElement).blur();
    this.membersService.openTooltip(member.displayName, member.id);
  }

  toggleMembers(): void {
    let dropArea: HTMLElement = document.getElementById("members") as HTMLElement;
    if (dropArea.style.display == 'none') {
      dropArea.style.display = 'inherit';
      document.getElementById("members-up-arrow").style.display = "inherit";
      document.getElementById("members-down-arrow").style.display = "none";
    }
    else {
      dropArea.style.display = 'none';
      document.getElementById("members-down-arrow").style.display = "inherit";
      document.getElementById("members-up-arrow").style.display = "none";
    }
  }

}
