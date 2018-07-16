import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationService} from './mainservices/resgistration.service';

@Component({
  selector: 'app-check-balance',
  template: `
    <p>
      Your current balance : {{balance}}
    </p>
  `,
  styles: []
})
export class CheckBalanceComponent implements OnInit {
  private balance;

  constructor(private rs:RegistrationService,private router:Router) { }

  ngOnInit() {
    this.rs.getBalance().subscibe(res=>{
      this.balance=res.balance;
    })
  }

}
