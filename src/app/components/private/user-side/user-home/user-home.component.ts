import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss','../../dashboard/dashboard.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  routeToAddFundraising(){
    this.route.navigateByUrl("/addFundraising");
  }

}
