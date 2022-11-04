import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Team } from 'app/Models/Team';
import { TeamsService } from 'app/Services/teams.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FilesService } from 'app/Services/files.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { MatchsService } from 'app/Services/matchs.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent implements OnInit {

  addMatchForm: FormGroup;
  teamsOptions1: Team[]= [];
  teamsOptions2: Team[]= [];
  team1:Team;
  team2:Team;
  public editor= ClassicEditor;
  ImagesPathArray: string[]= ["","","",""];
  ImagesPathString:string="";
  FirstImagePath:string;
  SecondImagePath:string;
  ThirdImagePath:string;
  FourthImagePath:string;

  constructor(private matchsApi:MatchsService, private teamsApi:TeamsService, private filesApi:FilesService, private router:Router) { }

  ngOnInit(): void {
    this.addMatchForm= new FormGroup({
      date:new FormControl(''),
      about: new FormControl(''),
      images: new FormControl(''),
      team1Id: new FormControl(''),
      team2Id: new FormControl('')
    });

    this.teamsApi.getAllTeams().subscribe(data=>{
      console.log(data);
      this.teamsOptions1=data;
      this.teamsOptions2=data;
    })
  }

  uploadFile1(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.FirstImagePath=event.body.dbPath;
          console.log(this.FirstImagePath);
          this.ImagesPathArray[0]=this.FirstImagePath;
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  uploadFile2(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.SecondImagePath=event.body.dbPath;
          console.log(this.SecondImagePath);
          this.ImagesPathArray[1]=this.SecondImagePath;
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  uploadFile3(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.ThirdImagePath=event.body.dbPath;
          console.log(this.ThirdImagePath);
          this.ImagesPathArray[2]=this.ThirdImagePath;
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  uploadFile4(files) {
    if (files.length === 0) return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.filesApi.UploadFile(formData)
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.Response){
          this.FourthImagePath=event.body.dbPath;
          console.log(this.FourthImagePath);
          this.ImagesPathArray[3]=this.FourthImagePath;
          console.log(this.ImagesPathArray)
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }


  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }


  changeTeam1(T){
    this.addMatchForm.controls.team1Id.setValue(T.id);
    this.team1=T;
  }

  changeTeam2(T){
    this.addMatchForm.controls.team2Id.setValue(T.id);
    this.team2=T;
  }


  onSubmit(){
    //add data from ckeditor
    const domEditableElement = document.querySelector('.ck-editor__editable');
    const domEditableElementInnerHTML= domEditableElement.innerHTML;
    this.addMatchForm.controls.about.setValue(domEditableElementInnerHTML);

    //adding images to the form
    this.ImagesPathArray.forEach((element)=>{
      if (element!=="") {
        this.ImagesPathString=this.ImagesPathString.concat(element,",");
      }
    });
    this.addMatchForm.controls.images.setValue(this.ImagesPathString);

    //send data
    this.matchsApi.addMatch(this.addMatchForm.value).subscribe(data=>{
      console.log(data);
    },error=>{
      console.error(error);
    },()=>{
      console.log('completed succeffully!')
      this.FirstImagePath="";
      this.SecondImagePath=""
      this.ThirdImagePath=""
      this.FourthImagePath=""
      this.addMatchForm.reset();
      alert("match added succefully !!")
      this.router.navigate(["matchs"])
    })

    console.log(this.addMatchForm.value)

  }


}
