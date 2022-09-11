import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Models/Product';
import { ProductsService } from 'app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:Product = new Product();
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string="";
  SecondImagePath:string="";
  ThirdImagePath:string="";
  FourthImagePath:string="";

  constructor(private productsApi: ProductsService) { }

  ngOnInit(): void {
    this.productsApi.receiveProduct().subscribe((data)=>{
      this.product=data;
      if (this.product.images.includes(",")) {
        this.ImagesPathArray=this.product.images.split(",");
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
