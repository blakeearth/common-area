import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { activities } from '../activities/activities';
import { faHome, faStore, faComments, faHourglass, faChartPie, faTasks, faCalendar, faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  location: Location;
  faHome = faHome;
  faStore = faStore;
  faComments = faComments;
  faHourglass = faHourglass;
  faChartPie = faChartPie;
  faTasks = faTasks;
  faCalendar = faCalendar;
  faCog = faCog;

  constructor(location: Location) {
    this.location = location;
    this.updateActivity.bind(this);
    this.location.onUrlChange(this.updateActivity);
  }

  navigate(s: string) {
    this.location.replaceState(s);
  }

  ngOnInit(): void {
    this.updateActivity(this.location.path(), this.location.getState());
  }

  updateActivity(url: string, state: unknown): void {
    // ALERT: REDUNDANCY
    let activity: string = url.replace('/home', '');
    activity = activity.replace('/', '');
    if (activity == '') {
      activity = 'room';
    }
    let selectedElements: HTMLCollection = document.getElementsByClassName("selected");
    let i: number = 0;
    for (let i: number = 0; i < selectedElements.length; i++) {
      let selectedElement: Element = selectedElements[i];
      selectedElement.classList.remove("selected");
    }
    let newVisibleActivity: Element = document.getElementById(activity + "-nav");
    newVisibleActivity.classList.add("selected");
  }

}
