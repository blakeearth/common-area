import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    if (this.location.path() == '/home') {
      this.location.replaceState('/home/tasks');
    }
    this.updateActivity(this.location.path(), this.location.getState());
    this.location.onUrlChange(this.updateActivity);
  }

  updateActivity(url: string, state: unknown): void {
    window.history.pushState(null, url, url);
    let activity: string = MenuComponent.getActivity(url);
    if (activity == 'room') {
      let activityContainer: Element = document.getElementById("activity-container");
      let room: HTMLElement = document.getElementById("room");
      activityContainer.classList.add("invisible");
      room.style.display = "flex";
    }
    else if (window.matchMedia('only screen and (max-width: 760px)').matches) {
      let activityContainer: Element = document.getElementById("activity-container");
      activityContainer.classList.remove("invisible");
      let room: HTMLElement = document.getElementById("room");
      room.style.display = "none";
    }
    
  }

  static getActivity(path: string): string {
    let splitPath: string[] = path.split('/');
    let activity: string = splitPath[2];
    console.log(activity);
    activity = activity.replace('/', '');
    if (activity == '') {
      activity = 'room';
    }
    return activity;
  }

}
