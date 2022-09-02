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
    this.getUsers();
  }

  getUsers(){
    this.usersApi.getUsers().subscribe(res =>{
      this.users=res;
      console.log(this.users);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }

  deleteAdmin(id:number){
    this.usersApi.deleteAdmin(id).subscribe(res=>{
      console.log(res);
      let index= this.users.findIndex((u)=>u.userId==id);
      this.users.splice(index, 1);
    }, error =>{
      console.log(error);
    }, ()=>{
    });
  }


  ngOnDestroy(): void {
  }

}
