import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './mainservices/registration.service';
import { Route, Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  template: `


    <form class="form-style-9" [formGroup]='myLoginForm' (ngSubmit)='login()'>
        <h2><em>Sign in</em></h2>
       <ul> <label>Email:</label><li> <input class="field-style field-split align-left" type="text"
                    name='email'
                    [formControl]="myLoginForm.controls['email']"><span class="error" *ngIf="!myLoginForm.controls['email'].valid">
                     Invalid Email</span><br><br></li></ul>

        <ul> <label>Password:</label><li><input  class="field-style field-split align-left" type='password'
                       name='password'
                       [formControl]="myLoginForm.controls['password']">
      <span class="error" *ngIf="!myLoginForm.controls['password'].valid"> Invalid Password</span><br><br></li></ul>
      <ul><li><button class="form-style-9 ul li" type="submit" [disabled]="!myLoginForm.valid">Login</button></li></ul>
    </form>
    `,
    styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit {
  // private email: String;
  // private password: String;
  myLoginForm: FormGroup;

  constructor(private rs: RegistrationService, private router: Router, private fb: FormBuilder) {
    this.myLoginForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]});
  }

  ngOnInit() {}

  login(): void {
    this.rs.loginHandler(this.myLoginForm.value.email, this.myLoginForm.value.password).subscribe(res => {
      console.log(res.token);

      localStorage.setItem('token', res.token);
      console.log('token reading: ' + localStorage.getItem('token'));
      this.router.navigate(['bankservices']);
    });
  }
}
