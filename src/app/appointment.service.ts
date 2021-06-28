import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointmentdto } from './appointmentdto';
import { Logindto } from './logindto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  constructor(public http:HttpClient) { }

  addAppointment(appointment:Appointmentdto):Observable<any>{
    return this.http.post("http://localhost:8082/salonapp/addappointment/", appointment);
  }

  viewAllAppointments():Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewallappointment");
  }

  viewAppointmentByScheduleId(scheduleId: number) {
    return this.http.get("http://localhost:8082/salonapp/viewappointmentbyscheduleid/"+scheduleId);
  }

  viewAppointmentByCustomerId(customerId:number){
    return this.http.get("http://localhost:8082/salonapp/viewappointmentbycustomerid/"+customerId);
  }

  cancelAppointment(appointmentId:number){
    return this.http.put("http://localhost:8082/salonapp/cancelappointment/",appointmentId);
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
