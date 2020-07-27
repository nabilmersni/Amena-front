import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent implements OnInit {

  username;
  user;
  url;
  myPost = [];
  postImg = "http://localhost:3000/";


  constructor(private router: Router,private userService:UserService, private postService: PostService,private route: Router) { }

  ngOnInit(): void {
    this.getProfileInfo();
    this.getMyPost();
  }

  getProfileInfo(){
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

  getMyPost(){
    this.postService.getMyPost().subscribe(
      res =>{
        this.myPost = res;
      }
    )
  }

  routeTodetail(id){
    this.route.navigateByUrl("/detail/"+id);
  }

}
