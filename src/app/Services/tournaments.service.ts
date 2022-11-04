import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tournament } from '../Models/Tournament';
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

}
