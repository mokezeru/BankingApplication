import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BankComponent } from './bank.component';

@NgModule({
  declarations: [
    BankComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BankComponent]
})
export class BankModule { }
