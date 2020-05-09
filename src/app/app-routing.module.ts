import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent

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
    path: 'home/tasks',
    component: HomeComponent
  },
  {
    path: 'home/calendar',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
