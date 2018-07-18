import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-transfer-failure',
  template: `
  <div>
  <h3>Beneficiary Account Not Found!</h3>
  <button (click)='goToOptions()'>Ok</button>
 </div>
  `,
  styles: []
})
export class TransferFailureComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goToOptions() {
    this.router.navigate(['bankservices']);
  }
}
