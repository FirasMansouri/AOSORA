import { Component, OnInit } from '@angular/core';
import { Match } from 'app/Models/Match';
import { MatchsService } from 'app/Services/matchs.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss']
})
export class MatchsComponent implements OnInit {

  matchs : Match[] = [];
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string="";

  constructor(private matchsApi: MatchsService) { }

  ngOnInit() {
    this.getMatchs();
  }

  sendMatch(match){
    this.matchsApi.sendMatch(match);
  }

  getMatchs(){
    this.matchsApi.getMatchs().subscribe(res =>{
      this.matchs=res;
      console.log(this.matchs);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  deleteMatch(id:number){
    this.matchsApi.deleteMatch(id).subscribe(res=>{
      console.log(res);
      let index= this.matchs.findIndex((m)=>m.id==id);
      this.matchs.splice(index, 1);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  ShowImage(image){
      return `https://localhost:7256/${image}`;
    }
    


}
