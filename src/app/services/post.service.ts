import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
//http://localhost:3000
  private _baselocalUrl = "http://localhost:3000";

  private _postAddUrl = this._baselocalUrl+ "/post/add";
  private _getAllPost = this._baselocalUrl+ "/post/all";
  private _getPostDetail = this._baselocalUrl+ "/post/detail/";
  private _getMyPost = this._baselocalUrl+ "/post/MyPost/";
  private _deletePost = this._baselocalUrl + "/post/delete/";



  constructor(private http:HttpClient) { }


  addPost(formData){
    return this.http.post<any>(this._postAddUrl,formData);
  }

  getAllPost(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getAllPost,{headers: headers_options});
  }

  getMyPost(){
    let id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getMyPost+id,{headers: headers_options});
  }

  getPostDetail(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getPostDetail+id,{headers: headers_options});
  }

  deletePost(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deletePost+id,{headers: headers_options});
  }
  

}
