import { Component, OnInit } from '@angular/core';
import { Tournament } from 'app/Models/Tournament';
import { TournamentsService } from 'app/Services/tournaments.service';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.scss']
})
export class TournamentDetailsComponent implements OnInit {

  tournament:Tournament;

  constructor(private tournamentsApi:TournamentsService) { }

  ngOnInit(): void {
    this.tournamentsApi.receiveTournament().subscribe(res=>{
      this.tournament=res
    })
  }
  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
