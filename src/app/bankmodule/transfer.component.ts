import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-transfer',
  template: `
  <form [formGroup]='transferForm' (ngSubmit)='transfer()'>
  <div>
        Amount : <input type="text"
                          formControlName='amount'><br><br>
        <div *ngIf="!transferForm.controls['amount'].valid">Invalid Amount</div>
        Beneficiary Account #: <input type="text"
                               formControlName='acctNum'><br><br>
        <div *ngIf="!transferForm.controls['acctNum'].valid">Invalid Account Number</div>
        <button type="submit" [disabled]='!transferForm.valid'>Submit</button>
  </div>
  </form>
  `,
  styles: []
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;

  constructor(private ls: LocalService, private router: Router, private fb: FormBuilder) {
      this.transferForm = fb.group({
        'amount': ['0', Validators.compose([Validators.required, Validators.pattern('[0-9].*')])],
        'acctNum': ['', Validators.compose([Validators.required, Validators.pattern('[0-9].*')])]
      });
   }

  ngOnInit() {
  }

  transfer() {
    this.ls.transferFund(this.transferForm.value.amount, this.transferForm.value.acctNum).subscribe(res => {
      if (res.message != null) {
        this.router.navigate(['bankservices/api/bank/transferconfirmation']);
      } else if (res.error === 'Insufficient Balance') {
        this.router.navigate(['bankservices/api/bank/transfererror']);
      } else {
        this.router.navigate(['bankservices/api/bank/error']);
      }
    });
  }
}
