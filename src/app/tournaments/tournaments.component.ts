import { Component, OnInit } from '@angular/core';
import { Tournament } from '../Models/Tournament';
import { TournamentsService } from '../Services/tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  tournaments : Tournament[] = [];

  constructor(private tournamentsApi: TournamentsService) { }

  ngOnInit() {
    this.getTournaments();
  }

  sendTournament(tournament){
    this.tournamentsApi.sendTournament(tournament);
  }

  getTournaments(){
    this.tournamentsApi.getTournaments().subscribe(res =>{
      this.tournaments=res;
      console.log(this.tournaments);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  ShowImage(image){
      return `https://localhost:7256/${image}`;
    }
    

}
