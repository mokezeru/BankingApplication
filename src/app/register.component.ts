import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './mainservices/registration.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
      <p>Register below</p>
    <div>

          user name: <input type="text" #name (input)="userName=name.value" ><br><br>
          account number: <input type="text" #acct (input)="acctNum=acct.value"><br><br>

          <button (click)="register(userName,acctNum)">Register</button>

    </div>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {
  public userName: String;
  public acctNum: String;
  private registartionData;
  constructor(private rs: RegistrationService, private router: Router) {}

  ngOnInit() {}

  register(name, acctNum): void {
    console.log(name + ' ' + this.acctNum); // TODO: Validation
    this.rs.register(name, acctNum).subscribe(res => {
      if (res.message !== 'undefined') {
        console.log('177718');
        this.router.navigate(['confirmation']);
      } else {
        this.router.navigate(['/']); // TODO: CHANGE THE url to error page
      }
    });

  }
}
