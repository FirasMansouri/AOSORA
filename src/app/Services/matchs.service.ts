import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from '../Models/Match';

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

}
