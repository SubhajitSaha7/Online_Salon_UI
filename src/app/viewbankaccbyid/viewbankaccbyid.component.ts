import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-viewbankaccbyid',
  templateUrl: './viewbankaccbyid.component.html',
  styleUrls: ['./viewbankaccbyid.component.css']
})
export class ViewbankaccbyidComponent implements OnInit {
  id:number;
  msg:string;
  bankacc:any;

  constructor(public bankservice:BankserviceService) { }

  ngOnInit() {
  }
  viewbyid():void{
    this.bankservice.viewbankaccbyid(this.id).subscribe(data=>{
                    console.log(data);
                    this.bankacc=data;
                    this.msg=undefined;  
                   },
                   error=>{
                     console.log(error);
                     this.msg=error.error.message;
                     this.bankacc=undefined;
                   });
  }

}
