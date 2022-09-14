import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public isLoggedIn:boolean;
  
  constructor(private http:HttpClient) { }


  login(email:string, password:string):Observable<any>{
    return this.http.get<any>(environment.endpoints.user.login+"?email="+email+"&password="+password);
  }

  isLoggedIn():boolean{
    return localStorage.getItem("token")? true:false;
  }
}
