import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BankComponent } from './bank.component';
import { CheckBalanceComponent } from './check-balance.component';
import { TransferComponent } from './transfer.component';
import { UpdateComponent } from './update.component';
import { RegistrationService } from '../mainservices/registration.service';
import {LocalService} from './services/local.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BankGuardService} from './services/bank-guard.service';

const BANK_ROUTES =[{path:'bank/checkbalance',component:CheckBalanceComponent,canActivate: [BankGuardService]},
                    {path:'bank/transfer',component:TransferComponent,canActivate:[BankGuardService]},
                    {path:'bank/updatedetail',component:UpdateComponent,canActivate:[BankGuardService]}]

@NgModule({
  declarations: [
    BankComponent,
    CheckBalanceComponent,
    TransferComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BANK_ROUTES)
  ],
  providers: [LocalService,BankGuardService],
  bootstrap: [BankComponent]
})
export class BankModule { }
