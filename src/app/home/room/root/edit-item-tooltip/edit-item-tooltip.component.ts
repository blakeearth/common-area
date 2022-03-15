import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item-tooltip',
  templateUrl: './edit-item-tooltip.component.html',
  styleUrls: ['./edit-item-tooltip.component.css']
})
export class EditItemTooltipComponent implements OnInit {

  onMove: Function;
  onErase: Function;

  ownerAccountId: string;
  accountId: string;

  x: string;
  y: string;

  constructor() { }

  ngOnInit(): void {
    this.accountId = sessionStorage.getItem("account_id");
  }

}
