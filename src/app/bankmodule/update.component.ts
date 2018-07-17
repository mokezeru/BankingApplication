import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-update',
  template: `

    <div>
      Street <input type="text" #street><br><br>
      City <input type="text" #city><br><br>
      State <input type="text" #state><br><br>
      ZIP <input type="text" #zip><br><br>
      Phone <input type="text" #phone><br><br>
      <button (click) = "updateAddress(street.value, city.value, state.value, zip.value, phone.value)">Update</button>
    </div>
  `,
  styles: []
})
export class UpdateComponent implements OnInit {

  constructor(private ls: LocalService, private router: Router) { }

  ngOnInit() {

  }

  updateAddress(street, city, state, zip, phone) {
      this.ls.updateAddress(street, city, state, zip, phone).subscribe(res => {
        console.log(res.message);
        if (res.message !== null) {
            this.router.navigate (['bankservices/api/bank/updateconfirmation']);
        } else {
          this.router.navigate (['api/bank/updatedetail']);
        }
      });
  }

}
