import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'app/Models/Blog';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private subject : BehaviorSubject<Blog> = new BehaviorSubject<Blog>(null);

  constructor(private http:HttpClient) { }

  sendBlog(blog:Blog){
    this.subject.next(blog);
  }

  receiveBlog():Observable<Blog>{
    return this.subject.asObservable();
  }

  getBlogs(){
    return this.http.get<Blog[]>(environment.endpoints.blog.getAll)
  }

  deleteBlog(id:number){
    return this.http.delete<any>(environment.endpoints.blog.delete+id);

  }

  updateBlog(blog: Blog){
    return this.http.put<Blog>(environment.endpoints.blog.update, blog);
  }

  addBlog(blog: Blog){
    return this.http.post<Blog>(environment.endpoints.blog.post, blog);
  }
}
