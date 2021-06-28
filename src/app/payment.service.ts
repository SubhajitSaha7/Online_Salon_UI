import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindto } from './logindto';
import { Paymentdto } from './paymentdto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public http:HttpClient) { }

  viewpaymentbyid(id:number):Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewbypaymentid/"+id);
  }
  viewallpayment():Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewallpayment");
  }
  addpayment(pmt:Paymentdto):Observable<any>{
    return this.http.post("http://localhost:8082/salonapp/addpaymentservice/",pmt);
  }

  public doLogin(login:Logindto):Observable<any>{
    return this.http.post("http://localhost:8082/salonapp/login",login);
  }

  public doLogout():Observable<any>{
    let token:string = JSON.parse(localStorage.getItem("userinfo")).token;
    console.log(token);
    const httpheaders=new HttpHeaders({"token-id":token});
    httpheaders.set("token-id",token);
    return this.http.get("http://localhost:8082/salonapp/logout", {headers:httpheaders});
  }

  encryptString(pwd:string):string{
    let str:string = "";
    for(let idx=0;idx<pwd.length;++idx)
    {
      str += String.fromCharCode(pwd.charCodeAt(idx)-3);
    }
    return str;
  }
}
