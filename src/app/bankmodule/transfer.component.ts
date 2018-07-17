import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  template: `
   <div>
      Amount <input type="text" #amt (input)="transferAmount=amt.value"><br><br>
      Beneficiary Acct. <input type="text" #act ><br><br>
      <button type="submit" (click)="transfer(amt.value,act.value)">Transfer</button>
   </div>
  `,
  styles: []
})
export class TransferComponent implements OnInit {

  constructor(private ls: LocalService, private router: Router) { }

  ngOnInit() {
  }

  transfer(amt, act) {
    this.ls.transferFund(amt, act).subscribe(res => {
      if (res.message != null) {
        this.router.navigate(['transferconfirmation']);
      } else if (res.error === 'Insufficient Balance') {
        this.router.navigate(['transfererror']);
      } else {
        this.router.navigate(['error']);
      }
    });
  }
}
