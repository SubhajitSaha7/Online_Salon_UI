import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { ViewbyscheduleidComponent } from './viewappointmentbyscheduleid/viewbyscheduleid.component';
import { FormsModule } from '@angular/forms';
import { ViewbycustomeridComponent } from './viewappointmentbycustomerid/viewbycustomerid.component';
import { CancelappointmentComponent } from './cancelappointment/cancelappointment.component';
import { AddsalonserviceComponent } from './addsalonservice/addsalonservice.component';
import { EditsalonserviceComponent } from './editsalonservice/editsalonservice.component';
import { ViewsalonserviceComponent } from './viewsalonservice/viewsalonservice.component';
import { ViewsalonservicebyidComponent } from './viewsalonservicebyid/viewsalonservicebyid.component';
import { ViewsalonservicebynameComponent } from './viewsalonservicebyname/viewsalonservicebyname.component';
import { ViewpaymentbyidComponent } from './viewpaymentbyid/viewpaymentbyid.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { ViewallpaymentComponent } from './viewallpayment/viewallpayment.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { ViewbankaccbyidComponent } from './viewbankaccbyid/viewbankaccbyid.component';
import { BankComponent } from './bank/bank.component';
import { AddbankaccComponent } from './addbankacc/addbankacc.component';
import { ViewserviceschedulebyidComponent } from './viewserviceschedulebyid/viewserviceschedulebyid.component';
import { ViewservicescheduleComponent } from './viewserviceschedule/viewserviceschedule.component';
import { ViewallscheduleComponent } from './viewallschedule/viewallschedule.component';
import { AddservicescheduleComponent } from './addserviceschedule/addserviceschedule.component';
import { ViewschedulebyserviceidComponent } from './viewschedulebyserviceid/viewschedulebyserviceid.component';
import { LoginComponent } from './login/login.component';
import { ViewcustomerbyidComponent } from './viewcustomerbyid/viewcustomerbyid.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddappointmentComponent,
    ViewappointmentComponent,
    ViewbyscheduleidComponent,
    ViewbycustomeridComponent,
    CancelappointmentComponent,
    AddsalonserviceComponent,
    EditsalonserviceComponent,
    ViewsalonserviceComponent,
    ViewsalonservicebyidComponent,
    ViewsalonservicebynameComponent,
    ViewpaymentbyidComponent,
    ViewpaymentComponent,
    ViewallpaymentComponent,
    AddpaymentComponent,
    ViewbankaccbyidComponent,
    BankComponent,
    AddbankaccComponent,
    ViewserviceschedulebyidComponent,
    ViewservicescheduleComponent,
    AddservicescheduleComponent,
    ViewservicescheduleComponent,
    ViewserviceschedulebyidComponent,
    ViewschedulebyserviceidComponent,
    ViewallscheduleComponent,
    LoginComponent,
    ViewcustomerbyidComponent,
    ViewcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
