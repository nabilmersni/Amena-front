import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formRegister : FormGroup;

  constructor(private fb : FormBuilder, private userService: UserService, private router: Router,private toastr: ToastrService) { 
    let registerControls = {

      fullname : new FormControl("",[
        Validators.required,
        Validators.pattern("[A-Za-z ']+"),
        Validators.minLength(2)
      ]),
      username : new FormControl("",[
        Validators.required,
        Validators.minLength(2)
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

    this.formRegister = fb.group(registerControls)
  }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.router.navigateByUrl("/dashboard");
    }
  }

  get myFullName(){return this.formRegister.get('fullname');};
  get myUserName(){return this.formRegister.get('username');};
  get myEmail(){return this.formRegister.get('email');};
  get myPhone(){return this.formRegister.get('phone');};
  get myPassword(){return this.formRegister.get('password');};
  get myPassword2(){return this.formRegister.get('repassword');};

  registerUser(){
    let data = this.formRegister.value;

    let user = new User(null,data.fullname,data.username,data.phone,data.email,data.password);

    this.userService.registerUser(user).subscribe(
      res =>{
        this.router.navigateByUrl('/login')
        this.toastr.success('User successful registred !');

      },
      err =>{
        this.toastr.error('User not registred !');
      }
    )

  }

}
