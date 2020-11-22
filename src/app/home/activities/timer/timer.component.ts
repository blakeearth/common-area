import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Activity } from '../activity';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, Activity {
  header: string = "Timer";

  tabs: Array<string> = ["host"];

  constructor() { }

  ngOnInit(): void {
  }

  host(): void {
    
  }

}
