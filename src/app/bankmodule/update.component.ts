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
  styles: [`
  .error {
    color: red;
    font-size: 12pt;
    font-family: 'century gothic';
  }
  label {
    color: black;
    font-size: 14pt;
    font-family: 'century gothic';
  }
  .form-style-9{
      max-width: 750px;
      background: #FAFAFA;
      padding: 30px;
      margin: 50px auto;
      box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
      border-radius: 10px;
      border: 6px solid #305A72;
  }
  .form-style-9 ul{
      padding:0;
      margin:0;
      list-style:none;
  }
  .form-style-9 ul li{
      display: block;
      margin-bottom: 10px;
      min-height: 35px;
  }
  .form-style-9 ul li  .field-style{
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      padding: 8px;
      outline: none;
      border: 1px solid #B0CFE0;
      -webkit-transition: all 0.30s ease-in-out;
      -moz-transition: all 0.30s ease-in-out;
      -ms-transition: all 0.30s ease-in-out;
      -o-transition: all 0.30s ease-in-out;

  }.form-style-9 ul li  .field-style:focus{
      box-shadow: 0 0 5px #B0CFE0;
      border:1px solid #B0CFE0;
  }
  .form-style-9 ul li .field-split{
      width: 49%;
  }
  .form-style-9 ul li .field-full{
      width: 100%;
  }
  .form-style-9 ul li input.align-left{
      float:left;
  }
  .form-style-9 ul li input.align-right{
      float:right;
  }
  .form-style-9 ul li textarea{
      width: 100%;
      height: 100px;
  }
  .form-style-9 ul li input[type="button"],
  .form-style-9 ul li button {
      -moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
      -webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
      box-shadow: inset 0px 1px 0px 0px #3985B1;
      background-color: #216288;
      border: 1px solid #17445E;
      display: inline-block;
      cursor: pointer;
      color: #FFFFFF;
      padding: 8px 18px;
      text-decoration: none;
      font: 16px Arial, Helvetica, sans-serif;
  }
  .form-style-9 ul li input[type="button"]:hover,
  .form-style-9 ul li input[type="submit"]:hover {
      background: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);
      background-color: #28739E;
  }
  `
]
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
