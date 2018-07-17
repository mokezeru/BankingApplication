import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-transfer-confirm',
  template: `
    <div>
      <h3>Transfer is done Successfully!</h3>
      <button (click)='goToOptions()'>Ok</button>

    </div>
  `,
  styles: []
})
export class TransferConfirmComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  goToOptions() {
    this.router.navigate(['bankservices']);
  }

}
