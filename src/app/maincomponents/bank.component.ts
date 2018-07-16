import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bank-comp',
  template: `
  <div>
  <a [routerLink]="['api/bank/checkbalance']">Check Balance</a> <br>
  <a [routerLink]="['api/bank/transfer']">Transfer Fund</a><br>
  <a [routerLink]="['api/bank/updatedetail']">Change Profile</a><br>
  <a [routerLink]="['logout']">Log-out</a><br>
  
</div>
  `,
  styles: []
})
export class BankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
