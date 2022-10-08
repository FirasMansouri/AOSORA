import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'app/Models/Address';
import { Player } from 'app/Models/Player';
import { FilesService } from 'app/Services/files.service';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  addPlayerForm:FormGroup;
  player:Player=new Player();
  address:Address= new Address();
  AvatarPath:string;

  constructor(private UsersApi:UsersService, private filesApi:FilesService, private router:Router) { }

  ngOnInit(): void {
    this.addPlayerForm= new FormGroup({
      image:new FormControl(''),
      name:new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      plays:new FormControl(''),
      wins: new FormControl(''),
      loses: new FormControl(''),
      Address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        postalCode: new FormControl('')
      })
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
          this.AvatarPath=event.body.dbPath;
          console.log(this.AvatarPath);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

  onSubmit(){
    this.addPlayerForm.controls.image.setValue(this.AvatarPath);
    this.UsersApi.addPlayer(this.addPlayerForm.value).subscribe(
    data=>{
      console.log(data);
    },error=>{
      console.error(error);
    },()=>{
      this.addPlayerForm.reset();
      alert("player added succefully !!");
      this.router.navigate(["users"]);
    })
    
  }


}
