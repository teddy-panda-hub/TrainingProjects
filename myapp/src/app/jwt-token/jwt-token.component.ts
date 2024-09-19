import { Component } from '@angular/core';
import { TokenService } from '../token.service';
import { HttpHeaders } from '@angular/common/http';
import { Authentication_Details } from 'src/Authentication_Details';

@Component({
  selector: 'app-jwt-token',
  templateUrl: './jwt-token.component.html',
  styleUrls: ['./jwt-token.component.css']
})
export class JwtTokenComponent {

  header!:HttpHeaders;
  details:Authentication_Details=new Authentication_Details("foo","foo");
  constructor(private tokenService: TokenService){}
  submit(){
    console.log("Details: ",this.details)
    this.tokenService.sendTokenRequest(this.details).subscribe((data)=>{
      console.log(data.jwt);
      // this.token=data.toString().substring(8,136);
      // console.log(this.token);
      this.header = new HttpHeaders().set('Authorization', "Bearer "+data.jwt);
    })
  }
  greet(){
    console.log("In greet of token component");
    this.tokenService.greetFun(this.header).subscribe((data)=>{
      console.log(data);
    })
  }
  admin(){
    console.log("In admin of token component");
    this.tokenService.adminFun(this.header).subscribe((data)=>{
      console.log(data);
    })
  }
  user(){
    console.log("In admin of token component");
    this.tokenService.userFun(this.header).subscribe((data)=>{
      console.log(data);
    })
  }

}
