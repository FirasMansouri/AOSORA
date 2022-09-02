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

  ngOnDestroy(): void {
  }

}
