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
import { UserProfileComponent } from './components/private/user-side/user-profile/user-profile.component';
import { FundDetailComponent } from './components/private/user-side/fund-detail/fund-detail.component';
import { NotActiveComponent } from './components/private/not-active/not-active.component';
import { AdminDashComponent } from './components/private/admin-side/admin-dash/admin-dash.component';
import { UsersListComponent } from './components/private/admin-side/user-managment/users-list/users-list.component';
import { UserUpdateComponent } from './components/private/admin-side/user-managment/user-update/user-update.component';
import { UserAddComponent } from './components/private/admin-side/user-managment/user-add/user-add.component';
import { FundListComponent } from './components/private/admin-side/fund-managment/fund-list/fund-list.component';

import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';



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
    UserProfileComponent,
    FundDetailComponent,
    NotActiveComponent,
    AdminDashComponent,
    UsersListComponent,
    UserUpdateComponent,
    UserAddComponent,
    FundListComponent,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
