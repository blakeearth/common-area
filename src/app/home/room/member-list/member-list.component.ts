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

  members: Set<Player> = new Set<Player>();
  membersList: Player[] = [];
  @Input() room: RoomComponent;

  membersService: MembersService;

  constructor(membersService: MembersService) {
    this.membersService = membersService;
  }

  ngOnInit(): void {
    this.membersService.addedMember.subscribe(member => {
      this.members.add(member);
      this.membersList = Array.from(this.members.values());
    });
    this.membersService.removedMember.subscribe(member => {
      this.members.delete(member);
      this.membersList = Array.from(this.members.values());
    });
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  openTooltip(event: Event, player: Player) {
    (event.target as HTMLElement).blur();
    this.membersService.openTooltip(player.displayName, player.id);
  }

  toggleMembers(): void {
    if (this.members) {
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

}
