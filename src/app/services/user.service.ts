import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baselocalUrl = "http://localhost:3000";

  private _userRegisterUrl = this._baselocalUrl+ "/user/register";
  private _userLoginUrl = this._baselocalUrl + "/user/login";

  constructor(private http:HttpClient) { }
  isLoggedAdmin(){
    let token = localStorage.getItem("token")
    if(token){
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.role == "admin"){
        return true
      }else{
        return false
      }
    }else{
      return false
    }

    
  };

  isLoggedUser(){
    let token = localStorage.getItem("token")
    if(token){
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if(decodedToken.role == "user"){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  };



  isLoggedIn(){
    let token = localStorage.getItem("token")
    let etat =  new JwtHelperService().decodeToken(token).etat;
    if(token){
        return true
    }else{
      return false
    }
  };

  isLoggedInAndActive(){
    let token = localStorage.getItem("token")
    let etat =  new JwtHelperService().decodeToken(token).etat;
    if(token){
      if(etat == true){
        return true
      }
    }else{
      return false
    }
  };


  registerUser(user:User){
    return this.http.post<any>(this._userRegisterUrl,user);
  }

  loginUser(user:User){
    return this.http.post<any>(this._userLoginUrl,user);
  }

}
