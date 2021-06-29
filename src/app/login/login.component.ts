import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { BankService } from '../bank.service';
import { CustomerService } from '../customer.service';
import { Logindto } from '../logindto';
import { PaymentService } from '../payment.service';
import { SalonserviceService } from '../salonservice.service';
import { ServicescheduleService } from '../serviceschedule.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Logindto=new Logindto();
  
  constructor(public storageservice:StorageService, public appointmentservice:AppointmentService, 
    public bankservice:BankService, public customerservice:CustomerService, public paymentservice:PaymentService,
    public salonserviceservice:SalonserviceService, public servicescheduleservice:ServicescheduleService,
    public router:Router) { }

  ngOnInit() {
  }

  doLogin():void{
    this.login.password=this.appointmentservice.encryptString(this.login.password);
    console.log(this.login.password);
    this.appointmentservice.doLogin(this.login).subscribe(
      data=>{localStorage.setItem("userinfo",JSON.stringify(data));
      this.storageservice.loginflag=true;
      this.storageservice.username=JSON.parse(localStorage.getItem("userinfo")).userName;
      this.storageservice.msg=undefined;
      this.storageservice.role=JSON.parse(localStorage.getItem("userinfo")).role;
      this.router.navigateByUrl("/");},
      error=>{this.storageservice.msg="Incorrect Username and Password";
      this.storageservice.loginflag=false;
      this.router.navigateByUrl("/login");}
    );
  }

}
