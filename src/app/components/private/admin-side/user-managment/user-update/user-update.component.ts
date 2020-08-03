import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss','../../../dashboard/dashboard.component.scss']
})
export class UserUpdateComponent implements OnInit {

  public formAddFundraising : FormGroup;
  url = "assets/img/default-img.png";
  uploadedFile: File;

  constructor(private fb : FormBuilder, private userService: UserService, private router: Router, private activeroute:ActivatedRoute,private toastr: ToastrService) { 
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

    }

    this.formAddFundraising = fb.group(registerControls)
  }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.params.id;
    
    this.userService.getUserInfo(id).subscribe(
      res => {
        let user = res;
        if(user.image == ""){
          this.url = "assets/img/default-pic.png";
        }else{
          this.url = "http://localhost:3000/"+user.image;
        }
        console.log(this.url);
        this.formAddFundraising.patchValue({
          fullname: user.fullname,
          username: user.username,
          email: user.email,
          phone: user.phone,
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  get myFullName(){return this.formAddFundraising.get('fullname');};
  get myUserName(){return this.formAddFundraising.get('username');};
  get myEmail(){return this.formAddFundraising.get('email');};
  get myPhone(){return this.formAddFundraising.get('phone');};


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

  updateUserInfo(){
    let id = this.activeroute.snapshot.params.id;

    let data = this.formAddFundraising.value;

    let user = new User(null, data.fullname, data.username, data.phone, data.email, null);
  
    let formData = new FormData();
  
    formData.append("image", this.uploadedFile, this.uploadedFile.name);
    formData.append("data", JSON.stringify(user));
  
    this.userService.updateUserInfo(formData,id).subscribe(
      res => {
        this.toastr.success('account Info updated !');
        this.router.navigateByUrl('/userManagment')
      },
      err => {
        this.toastr.error('account info not updated !');
      }
    )
  }

}
