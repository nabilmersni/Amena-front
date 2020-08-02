import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss',"../../../dashboard/dashboard.component.scss"]
})
export class UsersListComponent implements OnInit {

  constructor(private userService:UserService) { }

  users = [];
  url = "http://localhost:3000/";

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(
      res =>{
        this.users = res;
      },
      err =>{
        console.log(err)
      }
    )
  }

  updateUserState(id){
    this.userService.updateUserState(id).subscribe(
      res =>{
        this.getAllUser();
      },
      err =>{
        console.log(err)
      }
    )
  }

  deleteUser(user,index){

    this.users.splice(index,1);
    this.userService.deleteUser(user._id).subscribe(
      res =>{
        console.log("deleted")
      },
      err =>{
        console.log("not deleted")
      }
    )

  }

}
