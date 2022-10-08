import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-tournament',
  templateUrl: './update-tournament.component.html',
  styleUrls: ['./update-tournament.component.scss']
})
export class UpdateTournamentComponent implements OnInit {

  updateTournamentForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.updateTournamentForm= new FormGroup({})
  }

  onSubmit(){
    
  }

}
