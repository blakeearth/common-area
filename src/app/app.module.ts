import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

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
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { RoomComponent } from './home/room/room.component';
import { SignInComponent } from './auth/goals/sign-in/sign-in.component';
import { SignUpComponent } from './auth/goals/sign-up/sign-up.component';
import { JoinRoomComponent } from './auth/goals/join-room/join-room.component';
import { AuthComponent } from './auth/auth.component';
import { GoalContainerComponent } from './auth/goal-container/goal-container.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './home/activities/settings/settings.component';
import { RoomLinkDirective } from './home/activities/settings/room-link.directive';
import { RoomLinkComponent } from './home/activities/settings/room-link/room-link.component';
import { ChatMessageDirective } from './home/activities/chat/chat-message.directive';
import { ChatMessageComponent } from './home/activities/chat/chat-message/chat-message.component';
import { RoomInvitationDirective } from './home/activities/settings/room-invitation.directive';
import { RoomInvitationComponent } from './home/activities/settings/room-invitation/room-invitation.component';
import { ListDirective } from './home/activities/tasks/list.directive';
import { ListComponent } from './home/activities/tasks/list/list.component';
import { TaskComponent } from './home/activities/tasks/list/task/task.component';
import { TaskDirective } from './home/activities/tasks/list/task.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatsComponent } from './home/activities/stats/stats.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    StatsComponent,
    LandingPageComponent,
    RoomComponent,
    GoalContainerComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    SettingsComponent,
    RoomLinkDirective,
    RoomLinkComponent,
    ChatMessageDirective,
    ChatMessageComponent,
    RoomInvitationDirective,
    RoomInvitationComponent,
    JoinRoomComponent,
    ListDirective,
    ListComponent,
    TaskComponent,
    TaskDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FontAwesomeModule,
    ClipboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [RoomLinkComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
