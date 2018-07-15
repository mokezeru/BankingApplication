import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  data;
    constructor(){
        var obj1={_id:1,farm:'Natural Prairie',produce:['lettuce','tomato']};
        var obj2={_id:2,farm:'Grand Fruits',produce:['orange','mango']};
        this.data=[obj1,obj2];
    }

    getData(){
        return this.data;
    }
}
