import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindto } from './logindto';
import { Salonserviceschedule } from './salonservicescheduledto';

@Injectable({
  providedIn: 'root'
})
export class ServicescheduleService {

  constructor(public http:HttpClient) { }

  viewbyservicescheduleid(sid:number):Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewbysalonservicescheduleid/"+sid);
  }

  viewbysalonserviceid(serid:number):Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewbysalonservicescheduleserviceid/"+serid);
  }

  public viewall():Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewallsalonserviceschedule");
  }
  addserviceschedule(ssdto:Salonserviceschedule):Observable<any>{
    return this.http.post("http://localhost:8082/salonapp/createschedule", ssdto);
  }

  cancelserviceschedule(sid:number):Observable<any>{
    return this.http.put("http://localhost:8082/salonapp/cancelsalonserviceschedule/"+sid,{responseType : 'text'});
  }

  viewallsalonservice():Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewallsalonservice");
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
