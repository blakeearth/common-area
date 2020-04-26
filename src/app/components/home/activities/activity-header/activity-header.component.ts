import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-header',
  templateUrl: './activity-header.component.html',
  styleUrls: ['./activity-header.component.css']
})
export class ActivityHeaderComponent implements OnInit {
  @Input() header: String;

  constructor() { }

  ngOnInit(): void {
  }

}
