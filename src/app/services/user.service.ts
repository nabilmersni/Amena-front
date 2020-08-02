import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baselocalUrl = "http://localhost:3000";

  private _userRegisterUrl = this._baselocalUrl+ "/user/register";
  private _userLoginUrl = this._baselocalUrl + "/user/login";
  private _getUserInfo = this._baselocalUrl + "/user/one/";
  private _getAllUser = this._baselocalUrl + "/user/all";
  private _updateUserState = this._baselocalUrl + "/user/update-state/";
  private _deleteUserUrl = this._baselocalUrl + "/user/delete/";



  //common user and admin
  private _updateAccountInfo = this._baselocalUrl + "/update/";

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
    //let id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
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

  //username =  new JwtHelperService().decodeToken(localStorage.getItem("token")).username;


  registerUser(user:User){
    return this.http.post<any>(this._userRegisterUrl,user);
  }

  loginUser(user:User){
    return this.http.post<any>(this._userLoginUrl,user);
  }

  updateAccountInfo(formData){
    let id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateAccountInfo+id,formData,{headers: headers_options});
  }

  getProfileInfo(){
    let id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getUserInfo+id,{headers: headers_options});
  }

  getUserById(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getUserInfo+id,{headers: headers_options});
  }

  getAllUser(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getAllUser,{headers: headers_options});
  }

  updateUserState(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateUserState+id,{headers: headers_options});
  }

  getUserInfo(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getUserInfo+id,{headers: headers_options});
  }  

  updateUserInfo(formData,id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateAccountInfo+id,formData,{headers: headers_options});
  }

  deleteUser(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteUserUrl+id,{headers: headers_options});
  }

}
