import { Appointmentdto } from "./appointmentdto";
import { Customer } from "./customer";
import { Salonservicedto } from "./salonservicedto";

export class Payment {
    type:string;
    status:string;
    paymentId:number;
    // appointment:Appointmentdto=new Appointmentdto;
    // customer:Customerdto=new Customerdto;
    // salonservice:Salonservicedto=new Salonservicedto;
    appointmentId:number;
    preferredDate:string;
    name:string;
    contactNo:string;
    serviceName:string;
    servicePrice:number;
}
