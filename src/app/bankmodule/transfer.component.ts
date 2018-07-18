import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-transfer',
  template: `
  <form class="form-style-9" [formGroup]='transferForm' (ngSubmit)='transfer()'>
  <h2><em>Transfer Fund</em></h2>
  <div>
  <ul> <label>Amount:</label><li> <input class="field-style field-split align-left" type="text"
                          formControlName='amount'>
        <span class="error" *ngIf="!transferForm.controls['amount'].valid">Invalid Amount</span></li></ul>
        <ul> <label>Beneficiary Account #:</label><li> <input class="field-style field-split align-left" type="text"
                               formControlName='acctNum'>
        <span class="error" *ngIf="!transferForm.controls['acctNum'].valid">Invalid Account Number</span></li></ul>
        <ul><li><button class="form-style-9 ul li" type="submit" [disabled]="!transferForm.valid">Transfer</button></li></ul>
  </div>
  </form>
  `,
  styleUrls: ['./bank.component.css']
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
