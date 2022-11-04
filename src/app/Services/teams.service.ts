import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../Models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private subject : BehaviorSubject<Team> = new BehaviorSubject<Team>(null);

  constructor(private http: HttpClient) { }

  sendTeam(team:Team){
    this.subject.next(team);
  }

  receiveTeam():Observable<Team>{
    return this.subject.asObservable();
  }

  getAllTeams(){
    return this.http.get<Team[]>(environment.endpoints.team.getAll);
  }

}
