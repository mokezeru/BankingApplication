import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTab, MatFormField} from '@angular/material';
import { MatTabsModule } from '../../node_modules/@angular/material';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <h1 class="headtext"> Online Banking App</h1>
  </div>
  <div class='linkpanel'>
    <a [routerLink]="['/']"><button class="matbut" mat-button>Home</button></a>
    <a [routerLink]="['aboutus']"><button class="matbut" mat-button>About Us</button></a>
    <a [routerLink]="['contactus']"><button class="matbut" mat-button>Contact Us</button></a>
    <a [routerLink]="['register']" ><button class="matbut" mat-button>Sign Up</button></a>
    <a [routerLink]="['login']" ><button class="matbut" mat-button>Login</button></a>
  </div>
  <router-outlet class="bbody"></router-outlet>
   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  // hide():boolean{
  //   if(typeof localStorage.getItem('token')!=='undefined'){
  //     return true;
  //   }
  //   else return false;
  // }
}
