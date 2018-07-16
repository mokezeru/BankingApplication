import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmation',
  template: `
    <div>
      <h2>Account Created Successfully, please check your email for user details. </h2>
      <button (click)="goHome()">Ok</button>
    </div>
  `,
  styles: []
})
export class ConfirmationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goHome():void{
      this.router.navigate(['/'])
  }

}
