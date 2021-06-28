import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicescheduleService } from '../serviceschedule.service';
import { Salonserviceschedule } from '../salonservicescheduledto';

@Component({
  selector: 'app-addserviceschedule',
  templateUrl: './addserviceschedule.component.html',
  styleUrls: ['./addserviceschedule.component.css']
})
export class AddservicescheduleComponent implements OnInit {

  ssdto : Salonserviceschedule = new Salonserviceschedule();
  msg : string;
  msgflag : boolean ;
  @ViewChild("frm")
  form:NgForm;
  constructor(public servicescheduleservice : ServicescheduleService) { }

  ngOnInit() {
  }

  add():void{
    this.servicescheduleservice.addserviceschedule(this.ssdto).subscribe(
      data=>{console.log(data); this.msg=data.message; this.form.reset; this.msgflag=true;},
      error=>{console.log(error); this.msg=error.error.messages[0]; this.msgflag=false;}
    );
  }
}
