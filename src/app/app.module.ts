import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { HeaderComponent } from './home/header/header.component';
import { ActivityContainerComponent } from './home/activity-container.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { StoreComponent } from './home/activities/store/store.component';
import { ChatComponent } from './home/activities/chat/chat.component';
import { TimerComponent } from './home/activities/timer/timer.component';
import { TasksComponent } from './home/activities/tasks/tasks.component';
import { CalendarComponent } from './home/activities/calendar/calendar.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { RoomComponent } from './home/room/room.component';
import { SignInComponent } from './auth/goals/sign-in/sign-in.component';
import { SignUpComponent } from './auth/goals/sign-up/sign-up.component';
import { AuthComponent } from './auth/auth.component';
import { GoalContainerComponent } from './auth/goal-container/goal-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    ActivityContainerComponent,
    PanelHeaderComponent,
    StoreComponent,
    ChatComponent,
    TimerComponent,
    TasksComponent,
    CalendarComponent,
    LandingPageComponent,
    RoomComponent,
    GoalContainerComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
