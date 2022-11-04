import { Component, OnInit } from '@angular/core';
import { Tournament } from 'app/Models/Tournament';
import { TournamentsService } from 'app/Services/tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
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

  deleteProduct(id:number){
    this.tournamentsApi.deleteTournament(id).subscribe(res=>{
      console.log(res);
      let index= this.tournaments.findIndex((t)=>t.id==id);
      this.tournaments.splice(index, 1);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  ShowImage(image){
      return `https://localhost:7256/${image}`;
    }
    
}
