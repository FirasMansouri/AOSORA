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
  constructor(private productsApi: ProductsService) { }

  ngOnInit(): void {
    this.productsApi.receiveProduct().subscribe((data)=>{
      this.product=data;
      console.log(data)
    })

  }

}
