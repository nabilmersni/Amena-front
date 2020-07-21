import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add-fundraising',
  templateUrl: './user-add-fundraising.component.html',
  styleUrls: ['./user-add-fundraising.component.scss','../../dashboard/dashboard.component.scss','../../../../../assets/css/bootstrap.css']
})
export class UserAddFundraisingComponent implements OnInit {

  public formAddFundraising : FormGroup;
  url = "assets/img/default-img.png";
  uploadedFile: File;

  constructor(private fb : FormBuilder, private userService: UserService, private router: Router) { 

    let addFundraisingControls = {

      title : new FormControl("",[
        Validators.required,
        Validators.pattern("[A-Za-z ']+"),
        Validators.minLength(2)
      ]),
      Objectifamount : new FormControl("",[
        Validators.required,
      ]),
      type : new FormControl("",[
        Validators.required,
      ]),
      description : new FormControl("",[
        Validators.required,

      ])

    }

    this.formAddFundraising = fb.group(addFundraisingControls)
  }

  ngOnInit(): void {
  }

  get mytitle(){return this.formAddFundraising.get('title');};
  get myObjectifamount(){return this.formAddFundraising.get('Objectifamount');};
  get mytype(){return this.formAddFundraising.get('type');};
  get mydescription(){return this.formAddFundraising.get('description');};


  resetImg() {
    this.url = "assets/img/default-img.png"
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed 
        this.url = (event.target as FileReader).result.toString();
      }
    }

    this.uploadedFile = event.target.files[0];
  }


}
