import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalService} from './services/local.service';

@Component({
  selector: 'app-check-balance',
  template: `
    <div class="form-style-9">
      Your current balance : {{balance}} <br><br>
      <button (click)="goToOptions()">Ok</button>
    </div>
  `,
  styleUrls: ['./bank.component.css']
})
export class CheckBalanceComponent implements OnInit {
  private balance;

  constructor(private ls:LocalService,private router:Router) { }

  ngOnInit() {
    this.ls.getBalance().subscribe(res=>{
      this.balance = res.message;
      console.log('current balance: '+this.balance);
    });
  }

  goToOptions(){
    this.router.navigate(['bankservices']);
  }

}
