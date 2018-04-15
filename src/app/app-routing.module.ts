import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{MainWindowComponent} from './main-window/main-window.component';
import {CustomerComponent} from './customer/customer.component';
import {EventComponent} from './event/event.component';
import {MemberComponent} from './member/member.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {TeamComponent} from './team/team.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path: 'home',component:MainWindowComponent},
  {path: 'about',component:AboutComponent},
  {path: 'login',component:LoginComponent},
  {path: 'logout',component:LogoutComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'team',component:TeamComponent},
  {path: 'schedule',component:ScheduleComponent},
  {path: 'event',component:EventComponent},
  {path: 'member',component:MemberComponent},
  {path: 'customer',component:CustomerComponent},

  // Commented paths are examples from another site that work and are necessary
  // {path: 'tableau/:url',component:TableauComponent},
  // {path: 'tableau_/:url',component:TableauComponent},
  // {path: 'bobj/:indx', component:BobjComponent},
  // {path: 'bobj_/:indx', component:BobjComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

//export const routes:ModuleWithProviders = RouterModule.forRoot(router,{enableTracing:false});