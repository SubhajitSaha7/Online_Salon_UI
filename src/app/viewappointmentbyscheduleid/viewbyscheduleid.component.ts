import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointmentdto } from '../appointmentdto';

@Component({
  selector: 'app-viewbyscheduleid',
  templateUrl: './viewbyscheduleid.component.html',
  styleUrls: ['./viewbyscheduleid.component.css']
})
export class ViewbyscheduleidComponent implements OnInit {

  
  scheduleId:number;
  appointments:any;
  msg:string;
  appointment:Appointmentdto;
  

  constructor(public appointmentservice:AppointmentService) { }

  ngOnInit() {
  }

  viewbyscheduleid():void{
    if (this.scheduleId==undefined || this.scheduleId==null || this.scheduleId<=0){
      this.msg="Enter the Schedule ID greater than 0";
      return;
    }
    this.appointmentservice.viewAppointmentByScheduleId(this.scheduleId).subscribe(data=>{
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
