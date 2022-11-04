import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../Models/Player';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : User[] = []; 

  private playerSubject : BehaviorSubject<Player> = new BehaviorSubject<Player>(null);

  constructor(private http: HttpClient) { }

  register(body:any){
    return this.http.post<any>(environment.endpoints.user.register,body)
  }

  sendPlayer(player:Player){
    this.playerSubject.next(player);
  }

  receivePlayer():Observable<Player>{
    return this.playerSubject.asObservable();
  }

  getTeamPlayers(id:number){
    return this.http.get<Player[]>(environment.endpoints.player.getTeamPlayers+id);
  }

}
