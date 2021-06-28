import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-viewpaymentbyid',
  templateUrl: './viewpaymentbyid.component.html',
  styleUrls: ['./viewpaymentbyid.component.css']
})
export class ViewpaymentbyidComponent implements OnInit {
  id:number;
  msg:string;
  pmt:any;

  constructor(public paymentservice:PaymentService) { }

  ngOnInit() {
  }
  viewbyid():void{
    this.paymentservice.viewpaymentbyid(this.id).subscribe(data=>{
                    console.log(data);
                    this.pmt=data;
                    this.msg=undefined;  
                   },
                   error=>{
                     console.log(error);
                     this.msg=error.error.message;
                     this.pmt=undefined;
                   });
  }

}
