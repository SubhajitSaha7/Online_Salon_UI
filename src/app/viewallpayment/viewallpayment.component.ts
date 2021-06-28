import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-viewallpayment',
  templateUrl: './viewallpayment.component.html',
  styleUrls: ['./viewallpayment.component.css']
})
export class ViewallpaymentComponent implements OnInit {
  pmt:Payment[]=[];
  msg:string;
  currentpage:number=1;
  pmtdisp:Payment[]=[];
  totalpages:number;
  constructor(public pmtservice:PaymentService) { }

  ngOnInit() {
    this.pmtservice.viewallpayment().subscribe(data=>{
      console.log(data);
      this.pmt=data;
      let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.pmtdisp=this.pmt.slice(startrow, endrow);
      this.totalpages = Math.ceil(this.pmt.length/3.0);
    });

  }


  // deletebyid(id:number){
  //   this.pmtservice.deleteemployee(id).subscribe(data=>{this.msg=data + "for ID "+id;
  //                               this.pmtservice.viewallpayment().subscribe(data=>this.pmt=data);});
  // }

  previous():void{
    --this.currentpage;
    let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.pmtdisp=this.pmt.slice(startrow, endrow);
  }

  next():void{
    ++this.currentpage;
    let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.pmtdisp=this.pmt.slice(startrow, endrow);
  }

}
