import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/Models/User';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(environment.endpoints.user.getAll)
  }

  deleteAdmin(id:number){
    return this.http.delete<any>(environment.endpoints.product.delete+id);

  }


}
