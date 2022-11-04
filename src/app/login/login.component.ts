import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:any){
    let email:string = loginForm.controls.Email.value;
    let password: string = loginForm.controls.Password.value;
    // console.log(email, password)
    this.authService.login(email, password).subscribe(
      res=>{
        if (res==='email does not exist') {
          console.log('icorrect password')
        }else if(res==='incorrect password'){
          console.log('icorrect password')
        }else{
          localStorage.setItem("CONNECTED_ADMIN", JSON.stringify(res[1]) )
          console.log("user from local storage: ",localStorage.getItem("CONNECTED_ADMIN"));
          let t: string = res[0].token;
          localStorage.setItem("token",t)
          console.log("token from local storage: ",localStorage.getItem("token"));
          this.router.navigate(['/dashboard']);
        }
      }, error =>{
        console.log(error);
      }
    )
    return false;
  }

}
