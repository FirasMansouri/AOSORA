import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {

  updateTeamForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.updateTeamForm= new FormGroup({})
  }

  onSubmit(){
    
  }

}
