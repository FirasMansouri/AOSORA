import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tournament } from 'app/Models/Tournament';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  private subject : BehaviorSubject<Tournament> = new BehaviorSubject<Tournament>(null);

  constructor(private http:HttpClient) { }

  sendTournament(tournament:Tournament){
    this.subject.next(tournament);
  }

  receiveTournament():Observable<Tournament>{
    return this.subject.asObservable();
  }

  getTournaments(){
    return this.http.get<Tournament[]>(environment.endpoints.tournament.getAll)
  }

  deleteTournament(id:number){
    return this.http.delete<any>(environment.endpoints.tournament.delete+id);

  }

  updateTournament(tournament: Tournament){
    return this.http.put<Tournament>(environment.endpoints.tournament.update, tournament);
  }

  addTournament(tournament: Tournament){
    return this.http.post<Tournament>(environment.endpoints.tournament.post, tournament);
  }
}
