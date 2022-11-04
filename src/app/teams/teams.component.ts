import { Component, OnInit } from '@angular/core';
import { Team } from '../Models/Team';
import { TeamsService } from '../Services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[]=[];

  constructor(private teamsApi:TeamsService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  sendTeam(team:Team){
    this.teamsApi.sendTeam(team);
  }

  getTeams(){
    this.teamsApi.getAllTeams().subscribe(data=>{
      this.teams=data;
      console.log(this.teams);
    },err=>{
      console.log(err);
    })
  }

  ShowImage(image){
      return `https://localhost:7256/${image}`;
    }

}
