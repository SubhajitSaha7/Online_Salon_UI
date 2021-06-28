import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { BankService } from './bank.service';
import { CustomerService } from './customer.service';
import { PaymentService } from './payment.service';
import { SalonserviceService } from './salonservice.service';
import { ServicescheduleService } from './serviceschedule.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-salon-management';

  constructor(public storageservice:StorageService, public appointmentservice:AppointmentService, 
    public bankservice:BankService, public customerservice:CustomerService, public paymentservice:PaymentService,
    public salonserviceservice:SalonserviceService, public servicescheduleservice:ServicescheduleService,
    public router:Router){}

  doLogout():void{
    this.appointmentservice.doLogout().subscribe(
      data=>{localStorage.removeItem("userinfo");
      this.storageservice.msg="You have logged out";
      this.storageservice.loginflag=false;
      this.router.navigateByUrl("/login");}
    );
  }
}