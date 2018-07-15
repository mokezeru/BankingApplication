import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './maincomponents/home.component';

const APP_ROUTES:Routes=[{path:'',component:HomeComponent},
                        {path:'home',component:HomeComponent},
                        {path:'api',loadChildren:'./bankmodule/bank.module#BankModule'}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
