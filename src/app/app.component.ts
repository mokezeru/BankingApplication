import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` 
  <div>
  <a [routerLink]="['/']">Home</a> <br>
  <a [routerLink]="['about']">About</a><br>
  <a [routerLink]="['contactus']">Contact Us</a><br>
  <a [routerLink]="['register']">Sign Up</a><br>
  <a [routerLink]="['login']">Log in</a>
</div>
            
            <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
