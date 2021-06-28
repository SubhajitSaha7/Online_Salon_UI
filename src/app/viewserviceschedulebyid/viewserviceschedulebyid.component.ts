import { Component, OnInit } from '@angular/core';
import { Serviceschedule } from '../serviceschedule';
import { ServicescheduleService } from '../serviceschedule.service';

@Component({
  selector: 'app-viewserviceschedulebyid',
  templateUrl: './viewserviceschedulebyid.component.html',
  styleUrls: ['./viewserviceschedulebyid.component.css']
})
export class ViewserviceschedulebyidComponent implements OnInit {

  sid : number;
  schedules:Serviceschedule[] = [];
  serviceschedule : any = undefined;
  msg : string;

  constructor(public servicescheduleservice : ServicescheduleService) { }
  
  ngOnInit() {
  }

  viewbyid():void{
    if (this.sid==undefined || this.sid==null  || this.sid<=0){
      this.msg="Enter the Salon Service Schedule ID greater than 0";
      return ;
    }
    this.servicescheduleservice.viewbyservicescheduleid(this.sid).subscribe(data=>{
              console.log(data);
              this.serviceschedule =data;
              this.msg=undefined;
            },
            error=>{
              console.log(error);
              this.msg = error.error.message;
              this.serviceschedule=undefined;
            });
  }
}
