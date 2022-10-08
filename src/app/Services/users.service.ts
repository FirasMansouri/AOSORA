import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'app/Models/Player';
import { User } from 'app/Models/User';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private subject : BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private playerSubject : BehaviorSubject<Player> = new BehaviorSubject<Player>(null);

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
    return this.http.delete<any>(environment.endpoints.user.delete+id);
  }

  addAdmin(admin:User){
    return this.http.post<User>(environment.endpoints.user.post, admin);
  }

  updateAdmin(admin:User){
    return this.http.put<User>(environment.endpoints.user.update, admin);
  }

  //players
  sendPlayer(player:Player){
    this.playerSubject.next(player);
  }

  receivePlayer():Observable<Player>{
    return this.playerSubject.asObservable();
  }

  getPlayers(){
    return this.http.get<Player[]>(environment.endpoints.player.getAll)
  }

  deletePlayer(id:number){
    return this.http.delete<any>(environment.endpoints.player.delete+id);
  }

  addPlayer(player:Player){
    return this.http.post<Player>(environment.endpoints.player.post, player);
  }

  updatePlayer(player:Player){
    return this.http.put<Player>(environment.endpoints.player.update, player);
  }

  getTeamPlayers(id:number){
    return this.http.get<Player[]>(environment.endpoints.player.getTeamPlayers+id);
  }


}
