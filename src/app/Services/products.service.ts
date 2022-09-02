import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/Models/Product';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products : Product[] = []; 


  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>(environment.endpoints.product.getAll)
  }

}
