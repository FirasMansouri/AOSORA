import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/Models/User';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : User[] = []; 


  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(environment.endpoints.user.getAll)
  }

}
