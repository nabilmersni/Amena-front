import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { TestComponent } from './components/test/test.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/private/sidebar/sidebar.component';
import { TopbarrComponent } from './components/private/topbarr/topbarr.component';
import { UserDashComponent } from './components/private/user-side/user-dash/user-dash.component';
import { UserHomeComponent } from './components/private/user-side/user-home/user-home.component';
import { UserAddFundraisingComponent } from './components/private/user-side/user-add-fundraising/user-add-fundraising.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TestComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarrComponent,
    UserDashComponent,
    UserHomeComponent,
    UserAddFundraisingComponent,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
