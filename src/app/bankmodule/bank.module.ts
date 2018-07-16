import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BankComponent } from './bank.component';
import { CheckBalanceComponent } from './check-balance.component';
import { TransferComponent } from './transfer.component';
import { UpdateComponent } from './update.component';
import { RegistrationService } from '../mainservices/registration.service';

const BANK_ROUTES =[{path:'bank/checkbalance',component:CheckBalanceComponent},
                    {path:'bank/transfer',component:TransferComponent},
                    {path:'bank/updatedetail',component:UpdateComponent}]

@NgModule({
  declarations: [
    BankComponent,
    CheckBalanceComponent,
    TransferComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RegistrationService],
  bootstrap: [BankComponent]
})
export class BankModule { }
