import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { UserHomeComponent } from './components/private/user-side/user-home/user-home.component';


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
    component: DashboardComponent
  },

  {
    path: "home",
    component: UserHomeComponent
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
