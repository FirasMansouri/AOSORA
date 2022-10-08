import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'app/Models/Player';
import { Team } from 'app/Models/Team';
import { FilesService } from 'app/Services/files.service';
import { TeamsService } from 'app/Services/teams.service';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  addTeamForm:FormGroup;
  ImagePath:string;
  allPlayers: Player[]=[];
  teamPlayers: Player[]=[];

  constructor(private filesApi:FilesService, private usersApi:UsersService, private teamsApi: TeamsService, private router:Router) { }

  ngOnInit(): void {
    this.addTeamForm= new FormGroup({
      image:new FormControl(''),
      name:new FormControl(''),
      about:new FormControl(''),
      plays:new FormControl(''),
      wins: new FormControl(''),
      loses: new FormControl(''),
      players: new FormControl('')
    })

    this.usersApi.getPlayers().subscribe(data=>{
      this.allPlayers=data;
      console.log(this.allPlayers);
    },error=>{
      console.error(error);
    })

  }

  addPlayer(player){
    this.teamPlayers.push(player)
    console.log(this.teamPlayers);
    // console.log(player);
  }
  
  onSubmit(){
    this.addTeamForm.controls.image.setValue(this.ImagePath);
    this.addTeamForm.controls.players.setValue(this.teamPlayers) 
    this.teamsApi.addTeam(this.addTeamForm.value).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    },()=>{
      this.ImagePath="";
      this.addTeamForm.reset();
      alert("team added succefully !!")
      this.router.navigate(["teams"])
    })
    // console.log(this.addTeamForm.value); 
  }

  uploadImage(files) {
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
      let p= this.allPlayers.find(x=>x.userId==values.currentTarget.id)
      this.teamPlayers.push(p);
      console.log(this.teamPlayers)
    }else if(!values.currentTarget.checked){
      this.teamPlayers.forEach((element,index)=>{
        if(element.userId==values.currentTarget.id) this.teamPlayers.splice(index,1);
        console.log(this.teamPlayers)
     });
    }
    
  }
  
}
