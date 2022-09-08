import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : User[] = []; 


  constructor(private http: HttpClient) { }

  register(body:any){
    return this.http.post<any>(environment.endpoints.user.register,body)
  }

  

}
