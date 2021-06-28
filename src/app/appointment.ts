import { Customer } from "./customer";
import { Salonserviceschedule } from "./salonservicescheduledto";

export class Appointment {
    appointmentId:number;
    preferredDate:string;
    appointmentStatus:string;
    customer:Customer = new Customer();
    salonServiceSchedule:Salonserviceschedule = new Salonserviceschedule();
}
