import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { faHome, faStore, faComments, faHourglass, faChartPie, faTasks, faCalendar, faCog } from '@fortawesome/free-solid-svg-icons';
import { NotificationsService } from '../notifications/notifications.service';
import { UpdateNotesPopupComponent } from '../update-notes-popup/update-notes-popup.component';
import { UpdateNotesPopupDirective } from '../update-notes-popup.directive';
import { SocketService } from 'src/app/socket/socket.service';
import { Handler } from 'src/app/handler';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent extends Handler implements OnInit{
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

  updateNotesDisplay: string = "none";
  updateNotesData: string[];

  componentFactoryResolver: ComponentFactoryResolver;

  audio: HTMLAudioElement;

  constructor(notificationsService: NotificationsService, location: Location, componentFactoryResolver: ComponentFactoryResolver, socketService: SocketService) {
    super();
    
    this.notificationsService = notificationsService;
    this.componentFactoryResolver = componentFactoryResolver;
    this.socketService = socketService;
    this.location = location;
    this.location.onUrlChange(this.updateActivity.bind(this));

    this.audio = new Audio();
    this.audio.src = "../../../assets/notifications/notification.ogg";
    this.audio.load();
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

    this.socketService.setOnUpdateNotes(this.onUpdateNotes.bind(this));
  }

  onUpdateNotes(updateNotesData: any[]): void {
    this.updateNotesData = updateNotesData;
    for (let i = 0; i < updateNotesData.length; i++) this.notificationsService.pushNotification('update-notes');
    if (this.updateNotesData.length > 0) {
      this.updateNotesDisplay = "inherit";
    }
  }

  notifyActivity(activity: string): void {
    if (!(MenuComponent.getActivity(this.location.path()) == activity)) {
      let notificationsActivity: Element = document.getElementById(activity + "-notification");
      notificationsActivity.innerHTML = (Number.parseInt(notificationsActivity.innerHTML) + 1).toString();
      if (notificationsActivity.classList.contains("hidden")) notificationsActivity.classList.remove("hidden");
      this.audio.play();
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


  openUpdateNotes(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UpdateNotesPopupComponent);

    const viewContainerRef = this.updateNotesPopupHost.viewContainerRef;

    let componentRef: ComponentRef<UpdateNotesPopupComponent>;

    componentRef = viewContainerRef.createComponent(componentFactory);

    let instance: UpdateNotesPopupComponent = <UpdateNotesPopupComponent>componentRef.instance;
    instance.data = this.updateNotesData;
    instance.onClose = this.closeUpdateNotes.bind(this);
  }

  closeUpdateNotes(event: Event): void {
    if ((event.target as HTMLElement).classList.contains("modal") ||
      (event.target as HTMLElement).classList.contains("close-update-notes") ||
      (event.target as HTMLElement).classList.contains("close-button")) {
      const viewContainerRef = this.updateNotesPopupHost.viewContainerRef;
      viewContainerRef.clear();
      this.clearNotificationsForActivity("update-notes");
      this.updateNotesDisplay = "none";
    }
  }

}
