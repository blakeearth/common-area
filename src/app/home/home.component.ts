import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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
    //this.location.replaceState(window.location.href.replace("xn--dk8hvr", "slumberparty"));
    if (this.location.path() == '/home') {
      this.location.replaceState('/home/chat');
    }
    this.updateActivity(this.location.path(), this.location.getState());
    this.location.onUrlChange(this.updateActivity);
  }

  updateActivity(url: string, state: unknown): void {
    window.history.pushState(null, url, url);
    let activity: string = url.replace('/home', '');
    activity = activity.replace('/', '');
    if (activity == '') {
      let activityContainer: Element = document.getElementById("activity-container");
      let room: Element = document.getElementById("room");
      activityContainer.classList.add("invisible");
      room.classList.remove("invisible-mobile");
    }
    else {
      let activityContainer: Element = document.getElementById("activity-container");
      let room: Element = document.getElementById("room");
      activityContainer.classList.remove("invisible");
      room.classList.add("invisible-mobile");
    }
  }

}
