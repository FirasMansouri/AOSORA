import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/Models/User';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private subject : BehaviorSubject<User> = new BehaviorSubject<User>(null);
  

  constructor(private http: HttpClient) { }

  sendUser(user:User){
    this.subject.next(user);
  }

  receiveUser():Observable<User>{
    return this.subject.asObservable();
  }

  getUsers(){
    return this.http.get<User[]>(environment.endpoints.user.getAll)
  }

  deleteAdmin(id:number){
    return this.http.delete<any>(environment.endpoints.product.delete+id);
  }

  addAdmin(admin:User){
    return this.http.post<User>(environment.endpoints.user.post, admin);
  }

  updateAdmin(admin:User){
    return this.http.put<User>(environment.endpoints.user.update, admin);
  }


}
