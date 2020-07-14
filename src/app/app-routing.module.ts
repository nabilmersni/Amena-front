import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingPageComponent } from './components/public/landing-page/landing-page.component';


const routes: Routes = [

  {
    path: "",
    component: LandingPageComponent
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
