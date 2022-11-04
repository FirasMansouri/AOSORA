import { Component, OnInit } from '@angular/core';
import { Blog } from '../Models/Blog';
import { BlogsService } from '../Services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs : Blog[] = [];
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string="";

  constructor(private blogsApi: BlogsService) { }

  ngOnInit() {
    this.getBlogs();
  }

  sendBlog(blog){
    this.blogsApi.sendBlog(blog);
  }

  getBlogs(){
    this.blogsApi.getBlogs().subscribe(res =>{
      this.blogs=res;
      console.log(this.blogs);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  ShowImage(images:string){
    if (images!=null && images!=="") {
      this.ImagesPathArray=images.split(",");
      this.FirstImagePath=this.ImagesPathArray[0];      
    }
    return `https://localhost:7256/${this.FirstImagePath}`;
  }

}
