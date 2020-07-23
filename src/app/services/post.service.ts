import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _baselocalUrl = "http://localhost:3000";

  private _postAddUrl = this._baselocalUrl+ "/post/add";

  constructor(private http:HttpClient) { }


  addPost(formData){
    //let id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    //let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.post<any>(this._postAddUrl,formData);
  }

}
