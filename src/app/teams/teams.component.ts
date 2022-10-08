import { Component, OnInit } from '@angular/core';
import { Team } from 'app/Models/Team';
import { TeamsService } from 'app/Services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
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

  deleteTeam(id:number){
    this.teamsApi.deleteTeam(id).subscribe(res=>{
      console.log(res);
      let index= this.teams.findIndex((t)=>t.id==id);
      this.teams.splice(index, 1);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
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
