import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTab, MatFormField} from '@angular/material';
import { MatTabsModule } from '../../node_modules/@angular/material';

@Component({
  selector: 'app-root',
  template: `
  <div class='divlink'>
    <a [routerLink]="['/']"><button  mat-button>Home</button></a>
    <a [routerLink]="['/']"><button mat-button>About</button></a>
    <a [routerLink]="['contactus']"><button mat-button>Contact Us</button></a>
    <a [routerLink]="['register']" ><button mat-button>Sign Up</button></a>
    <a [routerLink]="['login']" ><button mat-button>Login</button></a>
  </div>

  <div class='divlink'><router-outlet class="bbody"></router-outlet></div>
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
