import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template: `
  <div class="form-style-9">
  <pre>Online Banking Application
       Modern Web Application [CS572]
       Course Project
       Team Members:
          Ahmed Kassa
          Bereket Yetera
          Eden Geberehanna
          Mequannint Zeru
  </pre>
</div>
`,
styleUrls: ['./app.component.css']
})
export class AboutusComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
