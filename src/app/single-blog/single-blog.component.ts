import { Component, OnInit } from '@angular/core';
import { Blog } from '../Models/Blog';
import { BlogsService } from '../Services/blogs.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  blog:Blog= new Blog();
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string="";
  SecondImagePath:string="";
  ThirdImagePath:string="";
  FourthImagePath:string="";
  constructor(private blogsApi:BlogsService) { }

  ngOnInit(): void {
    this.blogsApi.receiveBlog().subscribe((data)=>{
      this.blog=data;
      if (this.blog.images.includes(",")) {
        this.ImagesPathArray=this.blog.images.split(",");
        console.log(this.ImagesPathArray);
        this.FirstImagePath=this.ImagesPathArray[0];
        this.SecondImagePath=this.ImagesPathArray[1];
        this.ThirdImagePath=this.ImagesPathArray[2];
        this.FourthImagePath=this.ImagesPathArray[3];
      }
      console.log(data)
    })

  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
