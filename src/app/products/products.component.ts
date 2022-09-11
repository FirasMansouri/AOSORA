import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'app/Models/Product';
import { ProductsService } from 'app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy, OnInit {

  products : Product[] = [];
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string="";

  constructor(private productsApi: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  sendProduct(product){
    this.productsApi.sendProduct(product);
  }

  getProducts(){
    this.productsApi.getProducts().subscribe(res =>{
      this.products=res;
      console.log(this.products);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  deleteProduct(id:number){
    this.productsApi.deleteProduct(id).subscribe(res=>{
      console.log(res);
      let index= this.products.findIndex((p)=>p.id==id);
      this.products.splice(index, 1);
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

  ngOnDestroy(): void {
  }

}
