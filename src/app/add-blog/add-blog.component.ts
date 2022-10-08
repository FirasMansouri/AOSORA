import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogsService } from 'app/Services/blogs.service';
import { FilesService } from 'app/Services/files.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  addBlogForm:FormGroup;
  public editor= ClassicEditor;
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string;
  SecondImagePath:string;
  ThirdImagePath:string;
  FourthImagePath:string;

  constructor(private filesApi:FilesService, private blogsService:BlogsService, private router:Router) { }

  ngOnInit(): void {
    this.addBlogForm= new FormGroup({
      content: new FormControl(''),
      images: new FormControl(''),
      createdBy: new FormControl('')
    })
  }

  uploadFile1(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.FirstImagePath=event.body.dbPath;
          console.log(this.FirstImagePath);
          this.ImagesPathArray[0]=this.FirstImagePath;
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  uploadFile2(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.SecondImagePath=event.body.dbPath;
          console.log(this.SecondImagePath);
          this.ImagesPathArray[1]=this.SecondImagePath;
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  uploadFile3(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.ThirdImagePath=event.body.dbPath;
          console.log(this.ThirdImagePath);
          this.ImagesPathArray[2]=this.ThirdImagePath;
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  uploadFile4(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.FourthImagePath=event.body.dbPath;
          console.log(this.FourthImagePath);
          this.ImagesPathArray[3]=this.FourthImagePath;
          console.log(this.ImagesPathArray)
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }


  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }



  onSubmit(){
    //initialize foreign key (will modified)
    this.addBlogForm.controls.createdBy.setValue(1);
    //adding ckeditor content to the form
    const domEditableElement = document.querySelector('.ck-editor__editable');
    const domEditableElementInnerHTML= domEditableElement.innerHTML;
    this.addBlogForm.controls.content.setValue(domEditableElementInnerHTML);

    //adding images to the form
    this.ImagesPathArray.forEach((element)=>{
      if (element!=="") {
        this.ImagesPathString=this.ImagesPathString.concat(element,",");
      }
    });
    this.addBlogForm.controls.images.setValue(this.ImagesPathString);

    //send data
    this.blogsService.addBlog(this.addBlogForm.value).subscribe(data=>{
        console.log(data);
      },error=>{
        console.error(error);
      },()=>{
        console.log('completed succeffully!')
        this.FirstImagePath="";
        this.SecondImagePath=""
        this.ThirdImagePath=""
        this.FourthImagePath=""
        this.addBlogForm.reset();
        alert("blog added succefully !!")
        this.router.navigate(["blogs"])
      })

  }

}
