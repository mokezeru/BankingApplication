import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  data;
  data2;

  constructor(private http:Http) { }

  register(username,acctNum){
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    const options = new RequestOptions({headers: headers});

    // const headers = new HttpHeaders()
    //       .set('Content-Type', 'application/json');

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    console.log('from registration service');
    return  this.http.post('http://localhost:8080/api/register',{username:username,acctNum:acctNum},options
)
    .pipe(
      map((resp:Response)=>this.data=resp.json())
    );

  }
  loginHandler(email,pw){
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    const options = new RequestOptions({headers: headers});

    return  this.http.post('http://localhost:8080/api/login',{username:email,password:pw},options
)
    .pipe(
      map((resp:Response)=>this.data2=resp.json())
    );

  }

  getBalance(){
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    var token = localStorage.getItem('token');
    headers.append('authorization','Bearer '+token);

    const options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:8080/api/checkbalance',options);
  }
}
