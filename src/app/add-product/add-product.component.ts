import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { category } from 'app/Models/Category';
import { Product } from 'app/Models/Product';
import { FilesService } from 'app/Services/files.service';
import { ProductsService } from 'app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  product:Product= new Product();
  category:category = new category();
  options: string[]= ["T-SHIRTS", "HOODIES", "PANTS"];
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string;
  SecondImagePath:string;
  ThirdImagePath:string;
  FourthImagePath:string;

  constructor(private productsApi: ProductsService, private filesApi:FilesService, private router:Router) { }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl(''),
      discount: new FormControl(''),
      quantity: new FormControl(''),
      images: new FormControl(''),
      category:new FormGroup({
        name: new FormControl('T-SHIRTS')
      })
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
    this.ImagesPathArray.forEach((element)=>{
      if (element!=="") {
        this.ImagesPathString=this.ImagesPathString.concat(element,",");
      }
    });
    this.addProductForm.controls.images.setValue(this.ImagesPathString);
    this.productsApi.addProduct(this.addProductForm.value).subscribe(data=>{
        console.log(data);
      },error=>{
        console.error(error);
      },()=>{
        console.log('completed succeffully!')
        this.FirstImagePath="";
        this.SecondImagePath=""
        this.ThirdImagePath=""
        this.FourthImagePath=""
        this.addProductForm.reset();
        alert("product added succefully !!")
        this.router.navigate(["products"])
      })

  }

  
}
