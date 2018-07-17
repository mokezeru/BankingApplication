import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-update-confirmation',
  template: `
  <div>
  <h3>Profile Change is Done Successfully!</h3>
  <button (click)='goToOptions()'>Ok</button>

</div>
  `,
  styles: []
})
export class UpdateConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToOptions() {
    this.router.navigate(['bankservices']);
  }

}
