import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from 'app/Models/Match';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  private subject : BehaviorSubject<Match> = new BehaviorSubject<Match>(null);

  constructor(private http:HttpClient) { }

  sendMatch(match:Match){
    this.subject.next(match);
  }

  receiveMatch():Observable<Match>{
    return this.subject.asObservable();
  }

  getMatchs(){
    return this.http.get<Match[]>(environment.endpoints.match.getAll)
  }

  deleteMatch(id:number){
    return this.http.delete<any>(environment.endpoints.match.delete+id);

  }

  updateMatch(match: Match){
    return this.http.put<Match>(environment.endpoints.match.update, match);
  }

  addMatch(match: Match){
    return this.http.post<Match>(environment.endpoints.match.post, match);
  }
}
