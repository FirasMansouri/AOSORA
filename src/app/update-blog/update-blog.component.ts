import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnInit {

  updateBlogForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.updateBlogForm= new FormGroup({})
  }

  onSubmit(){
    
  }

}
