import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss',"../../../dashboard/dashboard.component.scss"]
})
export class FundListComponent implements OnInit {

  username;
  user;
  url;
  allPost = [];
  postImg = "http://localhost:3000/";


  constructor(private router: Router,private userService:UserService, private postService: PostService,private route: Router) { }

  ngOnInit(): void {
    this.getProfileInfo();
    this.getAllPost();
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

  getAllPost(){
    this.postService.getAllPost().subscribe(
      res =>{
        this.allPost = res;
      }
    )
  }

  routeTodetail(id){
    this.route.navigateByUrl("/detail/"+id);
  }

  deletePost(post){
    event.stopPropagation();

    //this.allPost.splice(index,1);
    this.postService.deletePost(post._id).subscribe(
      res =>{
        console.log("deleted");
        this.getAllPost();
      },
      err =>{
        console.log("not deleted")
      }
    )

  }

}
