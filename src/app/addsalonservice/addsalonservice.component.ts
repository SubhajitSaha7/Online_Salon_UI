import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalonserviceService } from '../salonservice.service';
import { Salonservicedto } from '../salonservicedto';

@Component({
  selector: 'app-addsalonservice',
  templateUrl: './addsalonservice.component.html',
  styleUrls: ['./addsalonservice.component.css']
})
export class AddsalonserviceComponent implements OnInit {

  service:Salonservicedto = new Salonservicedto();
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;
  constructor(public salonservice:SalonserviceService) { }

  ngOnInit() {
  }

  add():void{
    this.salonservice.addsalonservice(this.service).subscribe(
                                                            data=>{console.log(data); this.msg=data.message; this.form.reset; this.msgflag=true;},
                                                            error=>{console.log(error); this.msg=error.error.messages[0]; this.msgflag=false;}    
                                                             );
  }

}