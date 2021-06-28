import { Salonservicedto } from "./salonservicedto";

export class Serviceschedule {
    serviceScheduleId : number;
    noofappointments : number;
    scheduleDate : string;
    salonservice : Salonservicedto = new Salonservicedto();
    scheduleStatus : any;
    slot : string;
}
