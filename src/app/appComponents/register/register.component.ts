import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any ;
  registerUrl: string = 'https://localhost:7256/User/register';
  emailExistsUrl: string = 'https://localhost:7256/User/Email?email=';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      Username: new FormControl(''),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+=.:/!;,§£¤µ~_<>]).{8,}$")]),
      Street: new FormControl('',Validators.required),
      City: new FormControl('',Validators.required),
      ZipCode: new FormControl('',Validators.required)
    })
  }

  onEmailBlur(email:string){

    var getEmailUrl = this.emailExistsUrl+email;
    this.http.get<any>(getEmailUrl).subscribe(res =>{
      console.log(res);
      if (res===true) {
        this.registerForm.controls.Email.status='INVALID';
      }
    }, error =>{
      console.log(error);
    }, ()=>{
    });

    
  }

  onSubmit(){
    // console.log(this.registerForm)

    const body= {
      "name": this.registerForm.controls.Username.value,
      "email": this.registerForm.controls.Email.value,
      "password": this.registerForm.controls.Password.value,
      "Address":{
          "City": this.registerForm.controls.City.value,
          "Street": this.registerForm.controls.Street.value,
          "ZipCode": this.registerForm.controls.ZipCode.value
      }
    }

    this.http.post<any>(this.registerUrl, body).subscribe(res =>{
      this.registerForm.reset();
      console.log('success');
    }, error =>{
      console.log(error);
    }, ()=>{
      console.log('completed');
    });

  }

}
