import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-preview',
  templateUrl: './task-preview.component.html',
  styleUrls: ['./task-preview.component.css']
})
export class TaskPreviewComponent implements OnInit {

  @Input() activeTaskData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
