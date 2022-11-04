import { Component, OnInit } from '@angular/core';
import { Player } from 'app/Models/Player';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  player: Player=new Player();

  constructor(private usersApi: UsersService) { }

  ngOnInit(): void {
    this.usersApi.receivePlayer().subscribe((data)=>{
      this.player=data;
    })
  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
