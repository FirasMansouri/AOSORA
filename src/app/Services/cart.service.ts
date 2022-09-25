import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : Product[]= [];
  cartSubject = new BehaviorSubject<any>([]);
  orderList: any[]=[];

  constructor(private http:HttpClient) { }

  getCartItems(){
    return this.cartSubject.asObservable();
  }

  addCartItem(product: Product){
    const check:Product|any= this.cartItems.find(p=>p.id===product.id)
    if(check===undefined){
      product.cartQuantity=1;
      product.totalPrice=product.cartQuantity*product.price;
      this.cartItems.push(product);
      this.cartSubject.next(this.cartItems);
      console.log(this.cartItems);
    }else{
      this.increaseItem(check);
    }
  }

  removeCartItem(product: Product){
    this.cartItems.map((p, index:any)=>{
      if(product.id===p.id){
        this.cartItems.splice(index, 1);
        this.cartSubject.next(this.cartItems);
        console.log(this.cartItems);
      }
    })
  }

  // increaseItem(product:Product){
  //   this.cartItems.map((p,index)=>{
  //     if(p.id===product.id){
  //       p.cartQuantity++;
  //     }
  //   })
  // }

  increaseItem(product:Product){
    let index =this.cartItems.findIndex((c)=>c.id===product.id)
    if(index>-1){
      this.cartItems[index].cartQuantity++
      product.totalPrice=product.cartQuantity*product.price;
    }
  }

  decreaseItem(product:Product){
    let index =this.cartItems.findIndex((c)=>c.id===product.id)
    if(index>-1 && this.cartItems[index].cartQuantity>1){
      this.cartItems[index].cartQuantity--
      product.totalPrice=product.cartQuantity*product.price;
    }
  }

  removeAllCart(){
    this.cartItems=[]
    this.cartSubject.next(this.cartItems);
  }

  getCartTotal():number{
    let cartTotal=0
    this.cartItems.map((p,index)=>{
      cartTotal+=p.totalPrice;
    })
    return cartTotal;
  }

  postOrder(){
    this.cartItems.forEach((element)=>{
      const p= {
        ProductId:element.id,
        Quantity: element.cartQuantity
      }
      this.orderList.push(p);
    })
    console.log('cart items: ', this.cartItems);
    console.log('order list: ', this.orderList);
    var params=new HttpParams();
    if (localStorage.CONNECTED_USER !=null){
      const userId=(JSON.parse(localStorage.CONNECTED_USER)).UserId;
      params= params.set("userId", Number(userId));
    }else{
      const userId=0;
      params=params.set("userId", userId);
    }
    
    this.http.post(environment.endpoints.order.post,this.orderList, {params}).subscribe((data)=>{
      console.log(data);
    })
  }

}
