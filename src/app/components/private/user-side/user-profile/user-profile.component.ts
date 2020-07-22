import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss','../../dashboard/dashboard.component.scss']
})
export class UserProfileComponent implements OnInit {

  public formAddFundraising : FormGroup;
  url = "assets/img/default-img.png";
  uploadedFile: File;

  constructor(private fb : FormBuilder, private userService: UserService, private router: Router) { 
    let registerControls = {

      fullname : new FormControl("",[
        Validators.required,
        Validators.pattern("[A-Za-z ']+"),
        Validators.minLength(2)
      ]),
      username : new FormControl("",[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z0-9']+"),
      ]),
      email : new FormControl("",[
        Validators.required,
        Validators.email,
        Validators.minLength(2)
      ]),
      phone : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("[2-9][0-9]+")
      ]),
      password : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ]),
      repassword : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ])

    }

    this.formAddFundraising = fb.group(registerControls)
  }

  ngOnInit(): void {
  }

  get myFullName(){return this.formAddFundraising.get('fullname');};
  get myUserName(){return this.formAddFundraising.get('username');};
  get myEmail(){return this.formAddFundraising.get('email');};
  get myPhone(){return this.formAddFundraising.get('phone');};
  get myPassword(){return this.formAddFundraising.get('password');};
  get myPassword2(){return this.formAddFundraising.get('repassword');};

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

  test(){
    alert('aaa')
  }

}
