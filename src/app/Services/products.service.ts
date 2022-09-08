import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/Models/Product';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private subject : BehaviorSubject<Product> = new BehaviorSubject<Product>(null);

  constructor(private http: HttpClient) { }

  sendProduct(product:Product){
    this.subject.next(product);
  }

  receiveProduct():Observable<Product>{
    return this.subject.asObservable();
  }

  getProducts(){
    return this.http.get<Product[]>(environment.endpoints.product.getAll)
  }

  deleteProduct(id:number){
    return this.http.delete<any>(environment.endpoints.product.delete+id);

  }

  updateProduct(product: Product){
    return this.http.put<Product>(environment.endpoints.product.update, product);
  }

  addProduct(product: Product){
    return this.http.post<Product>(environment.endpoints.product.post, product);
  }

}
