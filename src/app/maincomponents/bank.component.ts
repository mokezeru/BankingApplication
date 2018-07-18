import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bank-comp',
  template: `
  <div class="banklink">
  <a [routerLink]="['api/bank/checkbalance']">Check Balance</a> <br> <br>
  <a [routerLink]="['api/bank/transfer']">Transfer Fund</a><br> <br>
  <a [routerLink]="['api/bank/updatedetail']">Change Profile</a><br> <br>
  <a [routerLink]="['logout']">Logout</a><br>

</div>
  `,
  styles: [`
    .banklink {
      margin-top: 50px;
      font-size: 18pt;
      text-align: left;
    ;
    }

  `]
})
export class BankComponent implements OnInit {
  @Output() emitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.emitter.emit('clear');
  }

}
