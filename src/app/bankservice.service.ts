import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Bankdto } from './bankdto';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

  constructor(public http:HttpClient) { }

  viewbankaccbyid(id:number):Observable<any>{
    return this.http.get("http://localhost:8082/salonapp/viewbybankaccountid/"+id);
  }
//  // addbankacc(bankacc:Bankdto):Observable<any>{
//     return this.http.post("http://localhost:8082/salonapp/addbankaccountservice/", bankacc);
//   }

}
