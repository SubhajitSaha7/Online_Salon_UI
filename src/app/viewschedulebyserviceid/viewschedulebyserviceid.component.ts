import { Component, OnInit } from '@angular/core';
import { ServicescheduleService } from '../serviceschedule.service';
import { Salonserviceschedule } from '../salonservicescheduledto';

@Component({
  selector: 'app-viewschedulebyserviceid',
  templateUrl: './viewschedulebyserviceid.component.html',
  styleUrls: ['./viewschedulebyserviceid.component.css']
})
export class ViewschedulebyserviceidComponent implements OnInit {
  services : any =[];
  serviceId:any = [];
  serviceschedule : any;
  msg : string;
  ssdto : Salonserviceschedule;

  constructor(public servicescheduleservice : ServicescheduleService) { }

  ngOnInit() {
    this.servicescheduleservice.viewallsalonservice().subscribe(data=>{
      console.log(data);
      this.services = data;
    } )
  }

  
  viewbyserviceid():void{
    if (this.serviceId==undefined || this.serviceId<=0){
      this.msg="Enter the Salon Service ID greater than 0";
      return;
    }
    this.servicescheduleservice.viewbysalonserviceid(this.serviceId).subscribe(data=>{
              console.log(data);
              this.serviceschedule=data;
              this.msg=undefined;
              },
              error=>{
                console.log(error);
                this.msg = error.error.message;
                this.serviceschedule=undefined;
              });
  }

}
