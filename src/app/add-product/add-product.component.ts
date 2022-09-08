import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { category } from 'app/Models/Category';
import { Product } from 'app/Models/Product';
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

  constructor(private productsApi: ProductsService) { }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl(''),
      discount: new FormControl(''),
      quantity: new FormControl(''),
      category:new FormGroup({
        name: new FormControl('T-SHIRTS')
      })
    })
  }

  onSubmit(){
   this.productsApi.addProduct(this.addProductForm.value).subscribe(data=>{
      console.log(data);
    },error=>{
      console.error(error);
    })

  }

  
}
