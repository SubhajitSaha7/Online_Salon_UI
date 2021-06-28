import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bankdto } from '../bankdto';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-addbankacc',
  templateUrl: './addbankacc.component.html',
  styleUrls: ['./addbankacc.component.css']
})
export class AddbankaccComponent implements OnInit {
  bankdto:Bankdto=new Bankdto;
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;
  constructor(public bankservice:BankService) { }

  ngOnInit() {
  }

  add():void{
    this.bankservice.addbankacc(this.bankdto).subscribe(
      data=>{console.log(data); this.msg=data.message; this.form.reset; this.msgflag=true;},
      error=>{console.log(error); this.msg=error.error.messages; this.msgflag=false;}
    );
  }
}
