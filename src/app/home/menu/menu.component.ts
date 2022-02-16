import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faHome, faStore, faComments, faHourglass, faChartPie, faTasks, faCalendar, faCog } from '@fortawesome/free-solid-svg-icons';
import { NotificationsService } from '../notifications/notifications.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  notificationsService: NotificationsService;
  location: Location;
  faHome = faHome;
  faStore = faStore;
  faComments = faComments;
  faHourglass = faHourglass;
  faChartPie = faChartPie;
  faTasks = faTasks;
  faCalendar = faCalendar;
  faCog = faCog;

  constructor(notificationsService: NotificationsService, location: Location) {
    this.notificationsService = notificationsService;
    this.location = location;
    this.location.onUrlChange(this.updateActivity.bind(this));
  }

  navigate(s: string, event: Event): void {
    let activity: string = MenuComponent.getActivity(s);
    event.preventDefault();
    document.getElementById(activity + "-nav").blur();
    this.location.replaceState(s);
  }

  ngOnInit(): void {
    this.notificationsService.notificationsSource.subscribe(activity => this.notifyActivity(activity));
    this.updateActivity(this.location.path(), this.location.getState());
  }

  notifyActivity(activity: string): void {
    if (!(MenuComponent.getActivity(this.location.path()) == activity)) {
      let notificationsActivity: Element = document.getElementById(activity + "-notification");
      notificationsActivity.innerHTML = (Number.parseInt(notificationsActivity.innerHTML) + 1).toString();
      if (notificationsActivity.classList.contains("hidden")) notificationsActivity.classList.remove("hidden");
    } 
  }

  clearNotificationsForActivity(activity: string): void {
    let notificationsActivity: Element = document.getElementById(activity + "-notification");
    notificationsActivity.innerHTML = "0";
    if (!notificationsActivity.classList.contains("hidden")) notificationsActivity.classList.add("hidden");
  }

  updateActivity(url: string, state: unknown): void {
    // ALERT: REDUNDANCY
    let activity: string = MenuComponent.getActivity(url);
    let selectedElements: HTMLCollection = document.getElementsByClassName("selected");
    let i: number = 0;
    for (let i: number = 0; i < selectedElements.length; i++) {
      let selectedElement: Element = selectedElements[i];
      selectedElement.classList.remove("selected");
    }
    let newVisibleActivity: Element = document.getElementById(activity + "-nav");
    newVisibleActivity.classList.add("selected");

    this.clearNotificationsForActivity(activity);
  }

  static getActivity(path: string): string {
    let splitPath: string[] = path.split('/');
    let activity: string = splitPath[2];
    activity = activity.replace('/', '');
    return activity;
  }

}
