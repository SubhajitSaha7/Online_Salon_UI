import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { Appointmentdto } from '../appointmentdto';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {

  appointment:Appointmentdto = new Appointmentdto();
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;

  constructor(public appointmentservice:AppointmentService) { }

  ngOnInit() {
  }

  add():void{
    this.appointmentservice.addAppointment(this.appointment).subscribe(
      data=>{
        console.log(data); 
        this.msg=data.message; 
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
