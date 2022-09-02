import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/Models/Product';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(environment.endpoints.product.getAll)
  }

  deleteProduct(id:number){
    return this.http.delete<any>(environment.endpoints.product.delete+id);

  }

}
