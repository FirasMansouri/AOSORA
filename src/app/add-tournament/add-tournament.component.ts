import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Match } from 'app/Models/Match';
import { FilesService } from 'app/Services/files.service';
import { MatchsService } from 'app/Services/matchs.service';
import { TournamentsService } from 'app/Services/tournaments.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {

  addTournamentForm:FormGroup;
  allMatchs:Match[]=[];
  tournamentMatchs:Match[]=[];
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  ImagePath:string;
  constructor(private filesApi:FilesService, private tournamentsApi:TournamentsService, private matchsApi:MatchsService, private router:Router) { }

  ngOnInit(): void {
    this.addTournamentForm= new FormGroup({
      beginDate:new FormControl(''),
      endDate: new FormControl(''),
      place: new FormControl(''),
      name:new FormControl(''),
      about:new FormControl(''),
      firstPrice:new FormControl(''),
      secondPrice:new FormControl(''),
      thirdPrice: new FormControl(''),
      platform:new FormControl(''),
      streamPath: new FormControl(''),
      image:new FormControl(''),
      matchs: new FormControl('')
    })

    this.matchsApi.getMatchs().subscribe(data=>{
      this.allMatchs=data
      console.log(this.allMatchs);
    })
  }

  uploadAvatar(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.ImagePath=event.body.dbPath;
          console.log(this.ImagePath);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

  dropDownListToggle(){
    var ddl=document.getElementById("dropDownList");
    ddl.classList.toggle("Visibility");
  }

  fieldsChange(values:any):void {
    if(values.currentTarget.checked==true){
      let p= this.allMatchs.find(x=>x.id==values.currentTarget.id)
      this.tournamentMatchs.push(p);
      console.log(this.tournamentMatchs)
    }else if(!values.currentTarget.checked){
      this.tournamentMatchs.forEach((element,index)=>{
        if(element.id==values.currentTarget.id) this.tournamentMatchs.splice(index,1);
        console.log(this.tournamentMatchs)
     });
    }
    
  }
  
  onSubmit(){
    //adding image to the form
    this.addTournamentForm.controls.image.setValue(this.ImagePath);
    //adding matchs to the form
    this.addTournamentForm.controls.matchs.setValue(this.tournamentMatchs) 

    //send data
    this.tournamentsApi.addTournament(this.addTournamentForm.value).subscribe(data=>{
      console.log(data);
    },error=>{
      console.error(error);
    },()=>{
      console.log('completed succeffully!')
      this.ImagePath="";
      this.addTournamentForm.reset();
      alert("tournament added succefully !!")
      this.router.navigate(["tournaments"])
    })
    // console.log(this.addTournamentForm.value);
    
  }

}
