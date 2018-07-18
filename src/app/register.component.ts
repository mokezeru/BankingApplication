import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './mainservices/registration.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <p>Register below</p>
    <form [formGroup]='myRegForm' (ngSubmit)='register()'>
    <div>
          User Name: <input type="text"
                            formControlName='username'><br><br>
          <div *ngIf="!myRegForm.controls['username'].valid">Invalid Username</div>
          Account Number: <input type="text"
                                 formControlName='acctNum'><br><br>
          <div *ngIf="!myRegForm.controls['username'].valid">Invalid Account Number</div>
          <button type="submit" [disabled]='!myRegForm.valid'>Submit</button>
    </div>
    </form>
  `,
  styles: []
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
