import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbarr',
  templateUrl: './topbarr.component.html',
  styleUrls: ['./topbarr.component.scss']
})
export class TopbarrComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

  

}
