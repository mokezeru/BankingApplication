import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './maincomponents/home.component';
import {RegisterComponent} from './register.component';
import { LoginComponent } from './login.component';
import { ContactUsComponent } from './contact-us.component';
import {LogoutComponent} from './maincomponents/logout.component';
import { ConfirmationComponent } from './maincomponents/confirmation.component';
import { HttpModule } from '@angular/http';
import { BankComponent } from './maincomponents/bank.component';

const APP_ROUTES: Routes = [{path: '', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path:'register',component: RegisterComponent},
                        {path:'login',component:LoginComponent},
                        {path:'contactus',component:ContactUsComponent},
                        {path:'bankservices/logout',component:LogoutComponent},
                        {path:'confirmation',component:ConfirmationComponent},
                        {path:'bankservices',component:BankComponent},
                        {path:'bankservices/api',loadChildren:'./bankmodule/bank.module#BankModule'}];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent,
    LogoutComponent,
    HomeComponent,
    ConfirmationComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
