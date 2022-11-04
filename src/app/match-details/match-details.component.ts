import { Component, OnInit } from '@angular/core';
import { Match } from 'app/Models/Match';
import { MatchsService } from 'app/Services/matchs.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  match:Match= new Match();
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string="";
  SecondImagePath:string="";
  ThirdImagePath:string="";
  FourthImagePath:string="";

  constructor(private matchsApi:MatchsService) { }

  ngOnInit(): void {
    this.matchsApi.receiveMatch().subscribe((data)=>{
      this.match=data;
      if (this.match.images.includes(",")) {
        this.ImagesPathArray=this.match.images.split(",");
        console.log(this.ImagesPathArray);
        this.FirstImagePath=this.ImagesPathArray[0];
        this.SecondImagePath=this.ImagesPathArray[1];
        this.ThirdImagePath=this.ImagesPathArray[2];
        this.FourthImagePath=this.ImagesPathArray[3];
      }
      console.log(data)
    })
  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
