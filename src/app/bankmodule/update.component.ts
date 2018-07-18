import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-update',
  template: `

  <form class="form-style-9" [formGroup]='updateForm' (ngSubmit)='updateAddress()'>
  <h2><em>Change Profile</em></h2>
  <div>
        <ul> <label>Street:</label><li> <input class="field-style field-split align-left" type="text"
                              formControlName='street'><br><br></li></ul>
        <ul> <label>City:</label><li>  <input class="field-style field-split align-left" type="text"
                               formControlName='city'><br><br></li></ul>
        <ul> <label>State:</label><li> <input class="field-style field-split align-left" type="text"
                               formControlName='state'><br><br></li></ul>
        <ul> <label>ZIP:</label><li> <input class="field-style field-split align-left" type="text"
                               formControlName='zip'><br><br></li></ul>
        <ul> <label>Phone:</label><li> <input class="field-style field-split align-left" type="text"
                               formControlName='phone'><br><br></li></ul>
        <ul><li><button class="form-style-9 ul li" type="submit" [disabled]="!updateForm.valid">Update</button></li></ul>
  </div>
  </form>
  `,
  styleUrls: ['./bank.component.css']
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
