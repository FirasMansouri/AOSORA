import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Address } from 'app/Models/Address';
import { User } from 'app/Models/User';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm:FormGroup;
  user:User=new User();
  address:Address= new Address();

  constructor(private usersApi: UsersService) { }

  ngOnInit(): void {
    this.usersApi.receiveUser().subscribe((data)=>{
      this.updateUserForm= new FormGroup({
        userId: new FormControl(data.userId),
        name:new FormControl(data.name),
        email: new FormControl(data.email),
        password: new FormControl(data.password),
        Address: new FormGroup({
          city: new FormControl(data.address.city),
          street: new FormControl(data.address.street),
          postalCode: new FormControl(data.address.zipCode)
        })
      })
    })
  }

  onSubmit(){
    this.usersApi.updateAdmin(this.updateUserForm.value).subscribe(data=>{
      console.log(data);
    },error=>{
      console.error(error);
    })

  }

}
