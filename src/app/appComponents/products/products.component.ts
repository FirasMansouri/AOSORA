import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  
  constructor(private productsApi: ProductsService) { }

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
  ngOnDestroy(): void {
  }

}
