import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'app/Models/Address';
import { User } from 'app/Models/User';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm:FormGroup;
  user:User=new User();
  address:Address= new Address();

  constructor(private UsersApi:UsersService, private router:Router) { }

  ngOnInit(): void {
    this.addUserForm= new FormGroup({
      name:new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      Address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        postalCode: new FormControl('')
      })
    })
  }

  onSubmit(){
    this.UsersApi.addAdmin(this.addUserForm.value).subscribe(
    data=>{
      console.log(data);
    },error=>{
      console.error(error);
    },()=>{
      this.addUserForm.reset();
      alert("user added succefully !!");
      this.router.navigate(["users"]);
    })
    
  }

}
