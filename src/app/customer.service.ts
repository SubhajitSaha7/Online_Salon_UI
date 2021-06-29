import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindto } from './logindto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  constructor(public http:HttpClient) { }

  viewbycustomerid(userId:number):Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewcustomerbyid/"+userId);
  }

  viewbycustomername(name:string):Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewcustomerbyname/"+name);
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
