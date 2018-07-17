import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-transfer-error',
  template: `
  <div>
  <h3>Insufficient Balance!</h3>
  <button (click)='goToOptions()'>Ok</button>

 </div>
  `,
  styles: []
})
export class TransferErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToOptions() {
    this.router.navigate(['bankservices']);
  }

}
