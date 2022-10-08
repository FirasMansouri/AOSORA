import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.scss']
})
export class UpdateMatchComponent implements OnInit {

  updateMatchForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.updateMatchForm= new FormGroup({})
  }

  onSubmit(){
    
  }
  
}
