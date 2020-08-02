import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { UserHomeComponent } from './components/private/user-side/user-home/user-home.component';
import { UserAddFundraisingComponent } from './components/private/user-side/user-add-fundraising/user-add-fundraising.component';
import { UserProfileComponent } from './components/private/user-side/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { FundDetailComponent } from './components/private/user-side/fund-detail/fund-detail.component';
import { NotActiveComponent } from './components/private/not-active/not-active.component';
import { UsersListComponent } from './components/private/admin-side/user-managment/users-list/users-list.component';
import { UserUpdateComponent } from './components/private/admin-side/user-managment/user-update/user-update.component';
import { UserAddComponent } from './components/private/admin-side/user-managment/user-add/user-add.component';
import { FundListComponent } from './components/private/admin-side/fund-managment/fund-list/fund-list.component';


const routes: Routes = [

  {
    path: "",
    component: LandingPageComponent
  },

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "register",
    component: RegisterComponent
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "home",
    component: UserHomeComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "addFundraising",
    component: UserAddFundraisingComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "profile",
    component: UserProfileComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "detail/:id",
    component: FundDetailComponent,
    canActivate : [AuthGuard]
  },

  //admin side link--------------------

   {
    path: "userManagment",
    component: UsersListComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "userManagment/user-update/:id",
    component: UserUpdateComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "userManagment/user-add",
    component: UserAddComponent,

  },
  
  {
    path: "fundManagment",
    component: FundListComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "not-active",
    component: NotActiveComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "**",
    component: NotFoundComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
