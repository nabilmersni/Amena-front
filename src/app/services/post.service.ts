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
  private _getAllPost = this._baselocalUrl+ "/post/all";


  constructor(private http:HttpClient) { }


  addPost(formData){
    return this.http.post<any>(this._postAddUrl,formData);
  }

  getAllPost(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getAllPost,{headers: headers_options});
  }
  

}
