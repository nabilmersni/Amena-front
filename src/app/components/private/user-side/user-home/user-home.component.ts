import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss','../../dashboard/dashboard.component.scss']
})
export class UserHomeComponent implements OnInit {
  posts = [];

  constructor(private route: Router,private postService : PostService) { }


  ngOnInit(): void {
    this.getAllFundrainsing();
  }

  getAllFundrainsing(){
    this.postService.getAllPost().subscribe(
      res =>{
        this.posts = res;
      }
    )
  }

  routeToAddFundraising(){
    this.route.navigateByUrl("/addFundraising");
  }

  routeTodetail(id){
    this.route.navigateByUrl("/detail/"+id);
  }

}
