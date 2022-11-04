import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blog } from '../Models/Blog';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private subject : BehaviorSubject<Blog> = new BehaviorSubject<Blog>(null);

  constructor(private http:HttpClient) { }

  sendBlog(blog){
    this.subject.next(blog);
  }

  receiveBlog():Observable<Blog>{
    return this.subject.asObservable();
  }

  getBlogs(){
    return this.http.get<Blog[]>(environment.endpoints.blog.getAll)
  }
}
