import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-preview',
  templateUrl: './task-preview.component.html',
  styleUrls: ['./task-preview.component.css']
})
export class TaskPreviewComponent implements OnInit {

  @Input() activeTaskData: any;
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  navigate(s: string, event: Event): void {
    event.preventDefault();
    this.location.replaceState(s);
  }

  ngOnInit(): void {
  }

}
