import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'app/Models/Product';
import { ProductsService } from 'app/Services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnDestroy, OnInit {

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
