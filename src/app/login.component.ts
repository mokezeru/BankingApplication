import { Component, OnInit } from '@angular/core';
import {RegistrationService} from './mainservices/registration.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
      <h3>Login</h3>
    email: <input type="text" #username (input)="email=username.value" ><br><br>
    password: <input type="password" #pw (input)="password=pw.value" ><br><br>
    <button (click)="login(email,password)">Login</button>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  private email:String;
  private password:String;

  constructor(private rs:RegistrationService,private router:Router) { }

  ngOnInit() {
  }

  login(email,password):void{
    this.rs.loginHandler(email,password).subscribe(res=>{
      console.log(res.token);
      localStorage.setItem('token',res.token);
      console.log("token reading: "+localStorage.getItem('token'));
      this.router.navigate(['bankservices']);
    });

  }

}
