import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { CartService } from '../Services/cart.service';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  
  products : Product[] = [];
  ImagesPathArray: string[]= ["","","",""];
  FirstImagePath:string="";

  constructor(private productsApi: ProductsService, private cartService:CartService) { }

  ngOnInit() {
    this.getProducts();
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

  addToCart(product:Product){
    this.cartService.addCartItem(product);
  }

  ShowImage(images:any){
    if (images!=null && images!=="") {
      this.ImagesPathArray=images.split(",");
      this.FirstImagePath=this.ImagesPathArray[0];
    }
    return `https://localhost:7256/${this.FirstImagePath}`;
  }

  ngOnDestroy(): void {
  }

}
