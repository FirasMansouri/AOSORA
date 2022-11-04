import { Component, OnInit } from '@angular/core';
import { Tournament } from '../Models/Tournament';
import { TournamentsService } from '../Services/tournaments.service';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {

  tournament:Tournament=new Tournament();

  constructor(private tournamentsApi:TournamentsService) { }

  ngOnInit(): void {
    this.tournamentsApi.receiveTournament().subscribe(res=>{
      this.tournament=res;
      console.log(this.tournament);
    })
  }
  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
