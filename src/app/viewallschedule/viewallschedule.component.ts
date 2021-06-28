import { Component, OnInit } from '@angular/core';
import { Serviceschedule } from '../serviceschedule';
import { ServicescheduleService } from '../serviceschedule.service';

@Component({
  selector: 'app-viewallschedule',
  templateUrl: './viewallschedule.component.html',
  styleUrls: ['./viewallschedule.component.css']
})
export class ViewallscheduleComponent implements OnInit {

    schedules:Serviceschedule[]=[];
    msg:string ;
    currentpage:number = 1;
    schedulesdisp:Serviceschedule[]=[];
    totalpages:number;
    constructor(public servicescheduleservice:ServicescheduleService) { }

  ngOnInit() {
    this.servicescheduleservice.viewall().subscribe(data=>{
      this.schedules=data;
      let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.schedulesdisp=this.schedules.slice(startrow, endrow);
      this.totalpages = Math.ceil(this.schedules.length/3.0);
    });
  }

  deletebyid(sid:number){
    this.servicescheduleservice.cancelserviceschedule(sid).subscribe(data=>{this.msg = "Status deleted for ID "+sid;
    this.servicescheduleservice.viewall().subscribe(data=>this.schedules=data)});
  }

  previous():void{
    --this.currentpage;
    let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.schedulesdisp=this.schedules.slice(startrow, endrow);
  }

  next():void{
    ++this.currentpage;
    let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.schedulesdisp=this.schedules.slice(startrow, endrow);
  }
}
