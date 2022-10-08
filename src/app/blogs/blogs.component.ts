import { Component, OnInit } from '@angular/core';
import { Blog } from 'app/Models/Blog';
import { BlogsService } from 'app/Services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
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

  deleteBlog(id:number){
    this.blogsApi.deleteBlog(id).subscribe(res=>{
      console.log(res);
      let index= this.blogs.findIndex((p)=>p.id==id);
      this.blogs.splice(index, 1);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  ShowImage(images){
    console.log(images);
    if (images!=null && images!=="") {
      this.ImagesPathArray=images.split(",");
      console.log(this.ImagesPathArray);
      this.FirstImagePath=this.ImagesPathArray[0];
      // à vérifier
      return `https://localhost:7256/${this.FirstImagePath}`;
    }
  }

   replaceStr(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
  }

}
