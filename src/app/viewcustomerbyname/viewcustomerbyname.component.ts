import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-viewcustomerbyname',
  templateUrl: './viewcustomerbyname.component.html',
  styleUrls: ['./viewcustomerbyname.component.css']
})
export class ViewcustomerbynameComponent implements OnInit {

  customers:any=undefined;
  name:string;
  msg:string;
  constructor(public storageservice:StorageService, public customerservice:CustomerService) { }

  ngOnInit() {
  }

  viewbycustomername():void{
    if (this.name==undefined)
    {
      this.msg="Enter correct name";
      return;
    }
      this.customerservice.viewbycustomername(this.name).subscribe(data=>{
                                                                              console.log(data);
                                                                              this.customers=data;
                                                                              this.msg=undefined;
                                                                              },
                                                                       error=>{
                                                                               console.log(error);
                                                                               this.msg = error.error.message;
                                                                               this.customers=undefined;
                                                                               });
  }

}
