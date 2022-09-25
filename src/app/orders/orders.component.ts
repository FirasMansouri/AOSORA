import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'app/Models/Order';
import { OrdersService } from 'app/Services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnDestroy, OnInit {

  orders : Order[] = [];


  constructor(private ordersApi: OrdersService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.ordersApi.getOrders().subscribe(res =>{
      this.orders=res
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  orderTotal(order:Order){
    let total:number=0;
    order.orderProducts.forEach(element => {
      total = total + (element.product.price-element.product.price/100*element.product.discount)*element.quantity;
    });
    return total;
  }

  sendOrder(order){
    this.ordersApi.sendOrder(order);
  }


  ngOnDestroy(): void {
  }

}
