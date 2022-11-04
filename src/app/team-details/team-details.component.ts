import { Component, OnInit } from '@angular/core';
import { Player } from '../Models/Player';
import { Team } from '../Models/Team';
import { TeamsService } from '../Services/teams.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  team:Team= new Team();
  teamPlayers: Player[]=[];

  constructor(private teamsApi:TeamsService, private usersApi:UsersService) { }

  ngOnInit(): void {
    this.teamsApi.receiveTeam().subscribe(data=>{
      this.team=data;
      console.log(this.team)
    })

    this.usersApi.getTeamPlayers(this.team.id).subscribe(data=>{
      this.teamPlayers=data;
      console.log(this.teamPlayers)
    })

  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

  sendPlayer(player){
    this.usersApi.sendPlayer(player);
  }
}
