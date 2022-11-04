import { Component, OnInit } from '@angular/core';
import { Player } from 'app/Models/Player';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players : Player[] = [];


  constructor(private usersApi: UsersService) { }

  ngOnInit() {
    this.getPlayers();
  }

  sendPlayer(player){
    this.usersApi.sendPlayer(player);
  }

  getPlayers(){
    this.usersApi.getPlayers().subscribe(res =>{
      this.players=res;
      console.log(this.players);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  deletePlayer(id:number){
    this.usersApi.deletePlayer(id).subscribe(res=>{
      console.log(res);
      let index= this.players.findIndex((p)=>p.userId==id);
      this.players.splice(index, 1);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  ShowImage(image){
      return `https://localhost:7256/${image}`;
    }
    
}
