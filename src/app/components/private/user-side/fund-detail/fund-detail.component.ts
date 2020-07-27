import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.scss','../../dashboard/dashboard.component.scss']
})
export class FundDetailComponent implements OnInit {

  post;
  user;
  postUserId;
  userImg;
  fundImg;

  constructor(private userService :UserService,private postService:PostService,private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    let postId = this.activeroute.snapshot.params.id;
    this.postService.getPostDetail(postId).subscribe(
      res =>{
        this.post = res;
        this.fundImg = "http://localhost:3000/"+this.post.image;
        

        this.userService.getUserById(this.post.userId).subscribe(
          res =>{
            this.user = res;
            this.userImg = "http://localhost:3000/"+this.user.image;
          },
    
          err =>{
            console.log(err);
          }
        )
      },

      err =>{
        console.log(err);
      }
    )

  }




}
