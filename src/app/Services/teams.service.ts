import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from 'app/Models/Team';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

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

  addTeam(team:Team){
    return this.http.post<Team>(environment.endpoints.team.post, team);
  }

  getAllTeams(){
    return this.http.get<Team[]>(environment.endpoints.team.getAll);
  }

  deleteTeam(id){
    return this.http.delete<any>(environment.endpoints.team.delete+id);
  }
}
