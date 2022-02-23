import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { faHome, faStore, faComments, faHourglass, faChartPie, faTasks, faCalendar, faCog } from '@fortawesome/free-solid-svg-icons';
import { NotificationsService } from '../notifications/notifications.service';
import { UpdateNotesPopupComponent } from '../update-notes-popup/update-notes-popup.component';
import { UpdateNotesPopupDirective } from '../update-notes-popup.directive';
import { SocketService } from 'src/app/socket/socket.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  @ViewChild(UpdateNotesPopupDirective, { static: true }) public updateNotesPopupHost: UpdateNotesPopupDirective;

  notificationsService: NotificationsService;
  socketService: SocketService
  location: Location;
  faHome = faHome;
  faStore = faStore;
  faComments = faComments;
  faHourglass = faHourglass;
  faChartPie = faChartPie;
  faTasks = faTasks;
  faCalendar = faCalendar;
  faCog = faCog;

  componentFactoryResolver: ComponentFactoryResolver;

  constructor(notificationsService: NotificationsService, location: Location, componentFactoryResolver: ComponentFactoryResolver, socketService: SocketService) {
    this.notificationsService = notificationsService;
    this.componentFactoryResolver = componentFactoryResolver;
    this.socketService = socketService;
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


  requestUpdateNotes(): void {
    //this.socketService.sendMessage({});
    this.openUpdateNotes({});
  }


  openUpdateNotes(updateNotesData: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UpdateNotesPopupComponent);

    const viewContainerRef = this.updateNotesPopupHost.viewContainerRef;

    let componentRef: ComponentRef<UpdateNotesPopupComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory);

    let instance: UpdateNotesPopupComponent = <UpdateNotesPopupComponent>componentRef.instance;
    instance.data = updateNotesData;
    instance.onClose = this.closeUpdateNotes.bind(this);
  }

  closeUpdateNotes(event: Event) {
    if ((event.target as HTMLElement).classList.contains("modal") ||
      (event.target as HTMLElement).classList.contains("close-update-notes") ||
      (event.target as HTMLElement).classList.contains("close-button")) {
      const viewContainerRef = this.updateNotesPopupHost.viewContainerRef;
      viewContainerRef.clear();
    }
  }

}
