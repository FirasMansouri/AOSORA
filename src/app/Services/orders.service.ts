import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'app/Models/Order';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private subject : BehaviorSubject<Order> = new BehaviorSubject<Order>(null);
  
  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get<Order[]>(environment.endpoints.order.getAll)
  }

  sendOrder(order:Order){
    this.subject.next(order);
  }

  receiveOrder():Observable<Order>{
    return this.subject.asObservable();
  }


}
