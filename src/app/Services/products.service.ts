import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/Product';

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
