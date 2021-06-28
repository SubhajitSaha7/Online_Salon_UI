import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointmentdto } from '../appointmentdto';

@Component({
  selector: 'app-viewbycustomerid',
  templateUrl: './viewbycustomerid.component.html',
  styleUrls: ['./viewbycustomerid.component.css']
})
export class ViewbycustomeridComponent implements OnInit {

  customerId:number;
  appointments:any;
  msg:string;
  appointment:Appointmentdto;
  

  constructor(public appointmentservice:AppointmentService) { }

  ngOnInit() {
  }

  viewbycustomerid():void{
    if (this.customerId==undefined || this.customerId==null || this.customerId<=0){
      this.msg="Enter the Customer Id ID greater than 0";
      return;
    }
    this.appointmentservice.viewAppointmentByCustomerId(this.customerId).subscribe(data=>{
      console.log(data);
      this.appointments=data;
      this.msg=undefined;
    },
    error=>{
      console.log(error);
      this.msg=error.error.message;
      this.appointments=undefined;
    })
  }

}
