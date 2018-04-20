import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { SignupComponent } from './signup/signup.component';
import { EventComponent } from './event/event.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchPipe } from './search.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrandBoxComponent } from './brand-box/brand-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    FooterComponent,
    MainWindowComponent,
    SidebarComponent,
    MessageComponent,
    SignupComponent,
    EventComponent,
    ScheduleComponent,
    TeamComponent,
    MemberComponent,
    CustomerComponent,
    SearchPipe,
    WelcomeComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    BrandBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
