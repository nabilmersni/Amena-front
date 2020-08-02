import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router :Router) { }
  role;

  ngOnInit(): void {
    let url = this.router.url;
    this.role =  new JwtHelperService().decodeToken(localStorage.getItem("token")).role;
  }

  dashboard(){
    let url = this.router.url;
    if(url == "/dashboard"){
      return true
    }else{
      return false
    }
  }

  home(){
    let url = this.router.url;
    if(url == "/home"){
      return true
    }else{
      return false
    }
  }

  profile(){
    let url = this.router.url;
    if(url == "/profile"){
      return true
    }else{
      return false
    }
  }

  router_dashboard(){
    this.router.navigateByUrl("/dashboard");
  }

  router_home(){
    this.router.navigateByUrl("/home");
  }

  router_profile(){
    this.router.navigateByUrl("/profile");
  }

  //----------------- admin ----------------------
  router_users(){
    this.router.navigateByUrl("/userManagment");
  }

  router_funds(){
    this.router.navigateByUrl("/profile");
  }

  users(){
    let url = this.router.url;
    if(url == "/userManagment"){
      return true
    }else{
      return false
    }
  }

  
 
}
