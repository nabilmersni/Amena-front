import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbarr',
  templateUrl: './topbarr.component.html',
  styleUrls: ['./topbarr.component.scss']
})
export class TopbarrComponent implements OnInit {

  username;
  user;
  url = "assets/img/default-pic.png";

  constructor(private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    //this.username =  new JwtHelperService().decodeToken(localStorage.getItem("token")).username;

    this.userService.getProfileInfo().subscribe(
      res => {
        this.user = res;
        if(this.user.image == ""){
          this.url = "assets/img/default-pic.png";
        }else{
          this.url = "http://localhost:3000/"+this.user.image;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

  

}
