import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser:User=new User();

  constructor() { }

  ngOnInit() {
    var user=JSON.parse(localStorage.getItem("CONNECTED_ADMIN"));
    // this.currentUser.userId=user.userId;
    console.log("user from localStorage: ",user);
    this.currentUser.name=user.name;
    this.currentUser.email = user.email;
    this.currentUser.image = user.image;
    this.currentUser.address.city = user.address.City;
    // console.log(this.currentUser.address.city);
    this.currentUser.role = user.role;
    console.log("current user:  ", this.currentUser);
  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
