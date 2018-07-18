import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './mainservices/registration.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-register',
  template: `

    <form class="form-style-9" [formGroup]='myRegForm' (ngSubmit)='register()'>
    <h2><em>Register</em></h2>
    <div>
      <ul> <label> User Name: </label><li><input class="field-style field-split align-left" type="text"
                            formControlName='username'>
          <span class="error" *ngIf="!myRegForm.controls['username'].valid">Invalid Username</span></li></ul>
      <ul> <label>Account Number: </label><li> <input class="field-style field-split align-left" type="text"
                                 formControlName='acctNum'>
          <span class="error" *ngIf="!myRegForm.controls['acctNum'].valid">Invalid Account Number</span></li></ul>
          <ul><li><button class="form-style-9 ul li" type="submit" [disabled]="!myRegForm.valid">Sign Up</button></li></ul>
    </div>
    </form>
  `,
  styleUrls: ['./app.component.css']
})
export class RegisterComponent implements OnInit {
  private registartionData;

  myRegForm: FormGroup;
  constructor(private rs: RegistrationService, private router: Router, private fb: FormBuilder) {
    this.myRegForm = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.email])],
      'acctNum': ['', Validators.compose([Validators.required, Validators.pattern('[0-9].*')])]
    });
  }

  ngOnInit() {}
  register(): void {
    this.rs.register(this.myRegForm.value.username, this.myRegForm.value.acctNum).subscribe(res => {
      if (res.message !== 'undefined') {
        console.log('177718');
        this.router.navigate(['confirmation']);
      } else {
        this.router.navigate(['/']); // TODO: CHANGE THE url to error page
      }
    });
  }
}
