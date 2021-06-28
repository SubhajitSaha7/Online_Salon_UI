import { Component, OnInit } from '@angular/core';
import { SalonserviceService } from '../salonservice.service';

@Component({
  selector: 'app-viewsalonservicebyname',
  templateUrl: './viewsalonservicebyname.component.html',
  styleUrls: ['./viewsalonservicebyname.component.css']
})
export class ViewsalonservicebynameComponent implements OnInit {

  services:any=[];
  sname:string;
  salonservices:any;
  msg:string;
  constructor(public salonservice:SalonserviceService) { }

  ngOnInit() {
    this.salonservice.viewallsalonservice().subscribe(data=>{
      console.log(data);
      this.services=data;
    });
  }

  viewBySalonService():void{
    if (this.sname==undefined)
    {
      this.msg="select the salon service";
      return;
    }
      this.salonservice.viewBysalonservice(this.sname).subscribe(data=>{
                                                                              console.log(data);
                                                                              this.salonservices=data;
                                                                              this.msg=undefined;
                                                                              },
                                                                       error=>{
                                                                               console.log(error);
                                                                               this.msg = error.error.message;
                                                                               this.salonservices=undefined;
                                                                               });
  }

}
