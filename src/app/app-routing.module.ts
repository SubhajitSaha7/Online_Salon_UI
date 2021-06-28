import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { AddbankaccComponent } from './addbankacc/addbankacc.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { AddsalonserviceComponent } from './addsalonservice/addsalonservice.component';
import { AddservicescheduleComponent } from './addserviceschedule/addserviceschedule.component';
import { BankComponent } from './bank/bank.component';
import { CancelappointmentComponent } from './cancelappointment/cancelappointment.component';
import { CgGuard } from './cg.guard';
import { EditsalonserviceComponent } from './editsalonservice/editsalonservice.component';
import { LoginComponent } from './login/login.component';
import { ViewallpaymentComponent } from './viewallpayment/viewallpayment.component';
import { ViewallscheduleComponent } from './viewallschedule/viewallschedule.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { ViewbycustomeridComponent } from './viewappointmentbycustomerid/viewbycustomerid.component';
import { ViewbyscheduleidComponent } from './viewappointmentbyscheduleid/viewbyscheduleid.component';
import { ViewbankaccbyidComponent } from './viewbankaccbyid/viewbankaccbyid.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewcustomerbyidComponent } from './viewcustomerbyid/viewcustomerbyid.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { ViewpaymentbyidComponent } from './viewpaymentbyid/viewpaymentbyid.component';
import { ViewsalonserviceComponent } from './viewsalonservice/viewsalonservice.component';
import { ViewsalonservicebyidComponent } from './viewsalonservicebyid/viewsalonservicebyid.component';
import { ViewsalonservicebynameComponent } from './viewsalonservicebyname/viewsalonservicebyname.component';
import { ViewschedulebyserviceidComponent } from './viewschedulebyserviceid/viewschedulebyserviceid.component';
import { ViewservicescheduleComponent } from './viewserviceschedule/viewserviceschedule.component';
import { ViewserviceschedulebyidComponent } from './viewserviceschedulebyid/viewserviceschedulebyid.component';

const routes: Routes = [{path: 'addappointment', component: AddappointmentComponent,canActivate:[CgGuard]},
                        {path: 'viewappointment', component: ViewappointmentComponent,canActivate:[CgGuard],
                          children:[{path: 'byscheduleid', component: ViewbyscheduleidComponent},
                                    {path: 'bycustid', component: ViewbycustomeridComponent},
                                    {path: 'cancelappointment/:id', component: CancelappointmentComponent}]
                        },
                        {path:'addsalonservice', component:AddsalonserviceComponent},
                        {path:'viewsalonservice', component:ViewsalonserviceComponent,
                          children:[{path:'byid', component:ViewsalonservicebyidComponent},
                                    {path:'byname', component:ViewsalonservicebynameComponent}]},
                      {path:'editsalonservice/:id', component:EditsalonserviceComponent},
                        {path:'viewbankacc',component:BankComponent,
                          children:[{path:'byid',component:ViewbankaccbyidComponent}]},
                        {path:'addbankacc',component:AddbankaccComponent},
                        {path:'addpayment',component:AddpaymentComponent},
                        {path:'viewpayment',component:ViewpaymentComponent,
                          children:[{path:'byid',component:ViewpaymentbyidComponent},
                                      {path:'viewall',component:ViewallpaymentComponent}]
                        },
                        {path:'addserviceschedule', component:AddservicescheduleComponent},
                        {path: 'viewserviceschedule', component:ViewservicescheduleComponent,
                          children:[{path:'byid', component: ViewserviceschedulebyidComponent},
                                      {path:'byserviceid', component:ViewschedulebyserviceidComponent},
                                      {path:'viewall', component:ViewallscheduleComponent}]
                        },
                        {path: 'viewcustomer', component:ViewcustomerComponent,
                          children:[{path:'bycustid', component: ViewcustomerbyidComponent}]
                        },
                        {path:'login',component:LoginComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
