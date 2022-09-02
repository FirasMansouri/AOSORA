import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'app/Models/User';
import { UsersService } from 'app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy, OnInit {

  users : User[] = [];


  constructor(private usersApi: UsersService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.usersApi.getUsers().subscribe(res =>{
      this.users=res;
      console.log(this.users);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }
  ngOnDestroy(): void {
  }

}
