import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { category } from 'app/Models/Category';
import { Product } from 'app/Models/Product';
import { ProductsService } from 'app/Services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  updateProductForm: FormGroup;
  product:Product= new Product();
  category:category = new category();
  options: string[]= ["T-SHIRTS", "HOODIES", "PANTS"];

  constructor(private productsApi: ProductsService) { }

  ngOnInit(): void {
    this.productsApi.receiveProduct().subscribe((data)=>{
      this.updateProductForm = new FormGroup({
        Id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        color: new FormControl(data.color),
        price: new FormControl(data.price),
        discount: new FormControl(data.discount),
        quantity: new FormControl(data.quantity),
        category:new FormGroup({
          name: new FormControl(data.category.name)
        })
      })      
    })

    

    
  }

  onSubmit(){
    this.productsApi.updateProduct(this.updateProductForm.value).subscribe(data=>{
      console.log(data);
    },error=>{
      console.error(error);
    })

  }
  
}
