import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Appointmentdto } from '../appointmentdto';

@Component({
  selector: 'app-cancelappointment',
  templateUrl: './cancelappointment.component.html',
  styleUrls: ['./cancelappointment.component.css']
})
export class CancelappointmentComponent implements OnInit {

  appointment:Appointmentdto = new Appointmentdto();
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;
  appointmentId:number;

  constructor(public apointmentservice:AppointmentService) { }

  ngOnInit() {
  }

  cancel():void{
    this.apointmentservice.cancelAppointment(this.appointmentId).subscribe(
      data=>{
        console.log(data); 
        //this.msg=data.message;
        this.form.reset; 
        this.msgflag=true;
      },
      error=>{
        console.log(error); 
        this.msg=error.error.messages[0]; 
        this.msgflag=false;
      }
    );
  }

}
