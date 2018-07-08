import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { map, catchError} from 'rxjs/operators';
const url = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http: Http) { }
  //CREATE,  EDIT, READ POST/S, DELETE
  
  createPost(post){
  return  this.http.post(`${url}/posts`, post, {headers: this.createHeaders()}).pipe(
      map((data)=> data),
      catchError((error) => error)
    )
  }

  editPost(post, id){
  return  this.http.put(`${url}/posts/${id}`, post, {headers: this.createHeaders()}).pipe(
      map((data)=> data.json()),
      catchError((error)=> error)
    )
  }
  
  readSinglePost(id){
  return  this.http.get(`${url}/posts/${id}`, {headers: this.createHeaders()}).pipe(
      map((data)=> data.json()),
      catchError((error)=> error)
    )
  }

  getAllPost(){
   return this.http.get(`${url}/posts`, {headers: this.createHeaders()}).pipe(
      map((data)=> data.json()),
      catchError((error)=> error)
    )
  }

  deletePost(id){
   return this.http.delete(`${url}/posts/${id}`, {headers: this.createHeaders()}).pipe(
      map((data)=> data.json()),
      catchError((error)=> error)
    )
  }

createHeaders(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return headers;
}
}


