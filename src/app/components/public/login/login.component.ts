import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin : FormGroup;

  constructor(private fb :FormBuilder, private userService: UserService,private router:Router,private toastr: ToastrService) { 

    let logControls = {

      email : new FormControl("",[
        Validators.required,
        Validators.email,
        Validators.minLength(2)
      ]),

      password : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ]),
    }

    this.formLogin = fb.group(logControls)

  }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.router.navigateByUrl("/dashboard");
    }
  }

  get logemail(){return this.formLogin.get('email');};
  get logpassword(){return this.formLogin.get('password');};
  

  logIn(){
    let data = this.formLogin.value;

    let user = new User(null,null,null,null,data.email,data.password);

    this.userService.loginUser(user).subscribe(
      res =>{
        let token = res.token;
        localStorage.setItem("token",token)
        if(this.userService.isLoggedInAndActive()){
          this.router.navigateByUrl('/dashboard')
          this.toastr.success('successful login !');


        }else{
          this.router.navigateByUrl('/not-active')
        }
      },
      err =>{
        console.log(err);
        this.toastr.error('email or password is incorrect !');
      }
    )

  }
}
