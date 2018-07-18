import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-update',
  template: `
  <h3>Change Profile</h3>
  <form [formGroup]='updateForm' (ngSubmit)='updateAddress()'>
  <div>
        Street : <input type="text"
                        formControlName='street'><br><br>
        City:  <input type="text"
                               formControlName='city'><br><br>
        State:  <input type="text"
                               formControlName='state'><br><br>
        ZIP : <input type="text"
                               formControlName='zip'><br><br>
        Phone : <input type="text"
                               formControlName='phone'><br><br>
        <button type="submit" [disabled]='!updateForm.valid'>Submit</button>
  </div>
  </form>
  `,
  styles: []
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;

  constructor(private ls: LocalService, private router: Router, private fb: FormBuilder) {
      this.updateForm = fb.group({
        'street': ['', Validators.required],
        'city': ['', Validators.required],
        'state': ['', Validators.required],
        'zip': ['', Validators.compose([Validators.required, Validators.pattern('[0-9].*')])],
        'phone': ['', Validators.compose([Validators.required, Validators.pattern('[0-9].*')])]
      });
  }
  ngOnInit() {

  }
  updateAddress() {
      this.ls.updateAddress(this.updateForm.value.street, this.updateForm.value.city,
                            this.updateForm.value.state , this.updateForm.value.zip,
                            this.updateForm.value.phone).subscribe(res => {
        console.log(res.message);
        if (res.message !== null) {
            this.router.navigate (['bankservices/api/bank/updateconfirmation']);
        } else {
          this.router.navigate (['api/bank/updatedetail']);
        }
      });
  }
}
