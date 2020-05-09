import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { HeaderComponent } from './home/header/header.component';
import { ActivityContainerComponent } from './home/activity-container.component';
import { ActivityHeaderComponent } from './home/activities/activity-header/activity-header.component';
import { StoreComponent } from './home/activities/store/store.component';
import { ChatComponent } from './home/activities/chat/chat.component';
import { TimerComponent } from './home/activities/timer/timer.component';
import { TasksComponent } from './home/activities/tasks/tasks.component';
import { CalendarComponent } from './home/activities/calendar/calendar.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { RoomComponent } from './home/room/room.component';
import { SignInComponent } from './sign-in/sign-in.component';

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
    RoomComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
