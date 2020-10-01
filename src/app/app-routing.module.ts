import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { JoinRoomComponent } from './auth/goals/join-room/join-room.component';
import { GoalContainerComponent } from './auth/goal-container/goal-container.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent

  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'auth/sign-in',
    component: AuthComponent
  },
  {
    path: 'auth/sign-up',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'home/store',
    component: HomeComponent

  },
  {
    path: 'home/chat',
    component: HomeComponent
  },
  {
    path: 'home/timer',
    component: HomeComponent
  },
  {
    path: 'home/analytics',
    component: HomeComponent
  },
  {
    path: 'home/tasks',
    component: HomeComponent
  },
  {
    path: 'home/settings',
    component: HomeComponent
  },
  {
    path: 'j/:roomId',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
