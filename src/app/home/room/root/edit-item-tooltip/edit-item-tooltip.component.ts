import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item-tooltip',
  templateUrl: './edit-item-tooltip.component.html',
  styleUrls: ['./edit-item-tooltip.component.css']
})
export class EditItemTooltipComponent implements OnInit {

  onMove: Function;
  onErase: Function;

  x: string;
  y: string;

  constructor() { }

  ngOnInit(): void {
  }

}
