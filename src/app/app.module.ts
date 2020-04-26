import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ActivityContainerComponent } from './components/home/activity-container.component';
import { ActivityHeaderComponent } from './components/home/activities/activity-header/activity-header.component';
import { StoreComponent } from './components/home/activities/store/store.component';
import { ChatComponent } from './components/home/activities/chat/chat.component';
import { TimerComponent } from './components/home/activities/timer/timer.component';
import { TasksComponent } from './components/home/activities/tasks/tasks.component';
import { CalendarComponent } from './components/home/activities/calendar/calendar.component';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { RoomComponent } from './components/home/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    ActivityContainerComponent,
    ActivityHeaderComponent,
    StoreComponent,
    ChatComponent,
    TimerComponent,
    TasksComponent,
    CalendarComponent,
    LandingPageComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
