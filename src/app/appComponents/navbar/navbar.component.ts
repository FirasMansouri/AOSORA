import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:User;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("CONNECTED_USER")){
      this.user= JSON.parse(localStorage.getItem("CONNECTED_USER")); 
      console.log("from navbar: ", this.user);
    }
  }

  public ShowImage = (ImagePath: string) => { 
    return `https://localhost:7256/${ImagePath}`; 
  }

}
