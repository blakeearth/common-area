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

  tabs: Array<string> = ["host", "join"];

  constructor() { }

  ngOnInit(): void {
  }

  openTab(tab: string, event: Event): void {
    (event.target as HTMLElement).blur();
    let tabToOpen: Element = document.getElementById(tab);
    tabToOpen.setAttribute("style", "display: flex;");
    let index: number = (this.tabs.indexOf(tab) + 1) % 2;
    let tabToClose: Element = document.getElementById(this.tabs[index]);
    tabToClose.setAttribute("style", "display: none;");
  }

  host(): void {
    
  }

}
