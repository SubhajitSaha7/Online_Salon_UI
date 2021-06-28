import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Paymentdto } from '../paymentdto';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent implements OnInit {
  pmtdto:Paymentdto=new Paymentdto;
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;
  constructor(public pmtservice:PaymentService) { }

  ngOnInit() {
  }

  add():void{
    this.pmtservice.addpayment(this.pmtdto).subscribe(
      data=>{console.log(data); this.msg=data.message; this.form.reset; this.msgflag=true;},
      error=>{console.log(error); this.msg=error.error.messages; this.msgflag=false;}
    );
  }
}
