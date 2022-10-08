import { Component, OnInit } from '@angular/core';
import { Player } from 'app/Models/Player';
import { Team } from 'app/Models/Team';
import { TeamsService } from 'app/Services/teams.service';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  team:Team= new Team();
  teamPlayers: Player[]=[];

  constructor(private teamsApi:TeamsService, private usersApi:UsersService) { }

  ngOnInit(): void {
    this.teamsApi.receiveTeam().subscribe(data=>{
      this.team=data;
    })

    this.usersApi.getTeamPlayers(this.team.id).subscribe(data=>{
      this.teamPlayers=data;
    })

  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
