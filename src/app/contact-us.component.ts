import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  template: `
    <div class="form-style-9">
      <pre>1000 N 4th Street, Fairfield, IA 52557
           Phone: (800) 369-6480
           Contact Email: bankingapp.mwa@gmail.com
      </pre>


    </div>

  `,
  styleUrls: ['./app.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
