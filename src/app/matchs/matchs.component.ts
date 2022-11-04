import { Component, OnInit } from '@angular/core';
import { Match } from '../Models/Match';
import { MatchsService } from '../Services/matchs.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
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

  ShowImage(image){
      return `https://localhost:7256/${image}`;
    }

}
