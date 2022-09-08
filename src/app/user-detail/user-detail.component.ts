import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/User';
import { UsersService } from 'app/Services/users.service';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User=new User();

  constructor(private usersApi: UsersService) { }

  ngOnInit(): void {
    this.usersApi.receiveUser().subscribe((data)=>{
      this.user=data;
    })
  }

}
