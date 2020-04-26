import { Component, OnInit, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { activities } from './activities/activities';

@Component({
  selector: 'app-activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.css']
})
export class ActivityContainerComponent implements OnInit {
  location: Location;
  activities: Array<string> = activities;

  constructor(location: Location) {
    this.location = location;
    this.updateActivity.bind(this);
    this.location.onUrlChange(this.updateActivity);
  }

  ngOnInit(): void {
    this.updateActivity(this.location.path(), this.location.getState());
  }

  updateActivity(url: String, state: unknown): void {
    // ALERT: REDUNDANCY
    let activity: string = url.replace('/home', '');
    activity = activity.replace('/', '');
    let visibleActivities: HTMLCollection = document.getElementsByClassName("visible");
    let i: number = 0;
    for (let i: number = 0; i < visibleActivities.length; i++) {
      let visibleActivity: Element = document.getElementsByClassName("visible")[i];
      visibleActivity.classList.remove("visible");
    }
    if (activities.includes(activity)) {
      let newVisibleActivity: Element = document.getElementById(activity);
      newVisibleActivity.classList.add("visible");
    }
  }

}
