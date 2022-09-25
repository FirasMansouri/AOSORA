import { Component, OnInit } from '@angular/core';
import { Order } from 'app/Models/Order';
import { OrdersService } from 'app/Services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order:Order
  ImagesPathArray: string[]= ["","","",""];
  FirstImagePath:string="";

  constructor(private orderApi: OrdersService) { }

  ngOnInit(): void {

    this.orderApi.receiveOrder().subscribe(res=>{
      console.log(res);
      this.order=res;
    },err=>{
      console.log(err);
    })

  }

  orderTotal(order:Order){
    let total:number=0;
    order.orderProducts.forEach(element => {
      total = total + (element.product.price-element.product.price/100*element.product.discount)*element.quantity;
    });
    return total;
  }


  ShowImage(images){
    console.log(images);
    if (images!=null && images!=="") {
      this.ImagesPathArray=images.split(",");
      console.log(this.ImagesPathArray);
      this.FirstImagePath=this.ImagesPathArray[0];
      // à vérifier
      return `https://localhost:7256/${this.FirstImagePath}`;
    }
    
  }

    
}
