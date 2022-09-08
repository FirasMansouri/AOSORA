import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[]= [];
  cartTotal: number=0;
  Shipping:number=30.00;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data)=>{
      this.cartItems=data;
      this.cartTotal=this.getCartTotal();
      console.log('cart items: ',this.cartItems);
    })
  }

  removeFromCart(product:Product){
    this.cartService.removeCartItem(product);
    this.cartTotal=this.getCartTotal();
  }

  increase(product: Product){
    this.cartService.increaseItem(product);
    this.cartTotal=this.getCartTotal();
  }

  decrease(product: Product){
    this.cartService.decreaseItem(product);
    this.cartTotal=this.getCartTotal();
  }

  getCartTotal(){
    return this.cartService.getCartTotal();
  }

  removeCart(){
    this.cartService.removeAllCart();
  }

}
