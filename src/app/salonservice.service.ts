import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logindto } from './logindto';
import { Salonservicedto } from './salonservicedto';

@Injectable({
  providedIn: 'root'
})
export class SalonserviceService {

  constructor(private http:HttpClient) { }

viewbysalonserviceid(sid:number):Observable<any>{
  return this.http.get("http://localhost:8082/salonapp/viewbysalonserviceid/"+sid);
}

viewBysalonservice(sname:string):Observable<any>{
  return this.http.get("http://localhost:8082/salonapp/viewbysalonservice/"+sname);
}

viewallsalonservice():Observable<any>{
  return this.http.get("http://localhost:8082/salonapp/viewallsalonservice/");
}

addsalonservice(service:Salonservicedto):Observable<any>{
  return this.http.post("http://localhost:8082/salonapp/addsalonservice",service);
}

public editsalonservice(service:Salonservicedto):Observable<any>{
  return this.http.put("http://localhost:8082/salonapp/editsalonservice",service);
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