import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUrl: string = 'https://localhost:7256/User/login'
  emailExistsUrl: string = 'https://localhost:7256/User/Email?email=';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onEmailBlur(email:string, loginForm: any){

    var getEmailUrl = this.emailExistsUrl+email;
    this.http.get<any>(getEmailUrl).subscribe(res =>{
      console.log(res);
      if (res===false) {
        loginForm.controls.Email.status='INVALID';
      }
    }, error =>{
      console.log(error);
    }, ()=>{
    });

    
  }

  onSubmit(loginForm:any){

    console.log(loginForm);
    var email= loginForm.controls.Email.value;
    var password= loginForm.controls.Password.value;
    this.http.get<any>(this.loginUrl+"?email="+email+"&password="+password).subscribe(res =>{
      console.log(this.loginUrl+"?email="+email+"&password="+password);
      console.log(res);
      if (res==='email does not exist') {
        console.log('icorrect password')
      }else if(res==='incorrect password'){
        console.log('icorrect password')
      }else{
        console.log('success');
      }
    }, error =>{
      console.log(error);
    }, ()=>{
    });

    loginForm.reset();
  }

}
