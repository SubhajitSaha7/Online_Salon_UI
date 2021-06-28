import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-viewcustomerbyid',
  templateUrl: './viewcustomerbyid.component.html',
  styleUrls: ['./viewcustomerbyid.component.css']
})
export class ViewcustomerbyidComponent implements OnInit {

  userId:number;
  customers:any = undefined;
  msg:string;
  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
  }

  viewbyid():void{
    if (this.userId==undefined || this.userId==null || this.userId<=0)
    {
      this.msg="Enter Customer ID greater than 0";
      return;
    }
    this.customerservice.viewbycustomerid(this.userId).subscribe(data=>{console.log(data);
                                                                      this.customers=data;
                                                                      this.msg=undefined},
                                                              error=>{
                                                                      console.log(error);
                                                                      this.msg=error.error.message;
                                                                      this.customers=undefined;
                                                              });
  }

}
