import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  template: `
    <p>
      contact-us component
    </p>
    <a [routerLink]="['/']">Home</a> <br>
  `,
  styles: []
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
