import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentication_Details } from 'src/Authentication_Details';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token!:string;
  constructor(private http: HttpClient) { }

  sendTokenRequest(jsonRequestBody: Authentication_Details): Observable<any>{
    // let jsonRequestBody: any ={username: 'foo', password: 'foo'};
    let url='http://localhost:8000/authenticate';
    return this.http.post(url,jsonRequestBody);
  }

  sendAuthRequest(){
    const headers = new HttpHeaders().set('Authorization', this.token);
    let url='http://localhost:8000/authorize';
    return this.http.get(url,{headers, responseType: 'text' as 'json'});
  }

  greetFun(headers: HttpHeaders){
    let url='http://localhost:8000/greet';
    return this.http.get(url,{headers,responseType: 'text' as 'json'});
  }

  adminFun(headers: HttpHeaders){
    let url='http://localhost:8000/admin';
    return this.http.get(url,{headers,responseType: 'text' as 'json'});
  }

  userFun(headers: HttpHeaders){
    let url='http://localhost:8000/user';
    return this.http.get(url,{headers,responseType: 'text' as 'json'});
  }
}