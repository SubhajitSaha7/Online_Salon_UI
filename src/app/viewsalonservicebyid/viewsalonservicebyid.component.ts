import { Component, OnInit } from '@angular/core';
import { SalonserviceService } from '../salonservice.service';

@Component({
  selector: 'app-viewsalonservicebyid',
  templateUrl: './viewsalonservicebyid.component.html',
  styleUrls: ['./viewsalonservicebyid.component.css']
})
export class ViewsalonservicebyidComponent implements OnInit {

  sid:number;
  salonservices:any = undefined;
  msg:string;
  constructor(public salonservice:SalonserviceService) { }

  ngOnInit() {
  }

  viewbyid():void{
    if (this.sid==undefined || this.sid==null || this.sid<=0)
    {
      this.msg="Enter Salon Service ID greater than 0";
      return;
    }
    this.salonservice.viewbysalonserviceid(this.sid).subscribe(data=>{console.log(data);
                                                                      this.salonservices=data;
                                                                      this.msg=undefined},
                                                              error=>{
                                                                      console.log(error);
                                                                      this.msg=error.error.message;
                                                                      this.salonservices=undefined;
                                                              });
  }
}
