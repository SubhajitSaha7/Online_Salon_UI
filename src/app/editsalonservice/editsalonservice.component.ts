import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonserviceService } from '../salonservice.service';
import { Salonservicedto } from '../salonservicedto';

@Component({
  selector: 'app-editsalonservice',
  templateUrl: './editsalonservice.component.html',
  styleUrls: ['./editsalonservice.component.css']
})
export class EditsalonserviceComponent implements OnInit {

  salondto:Salonservicedto= new Salonservicedto();
  //msg:string;
  errorMsg:string;
  services:any=[];
  form:NgForm;
  //userName=this.empservice.userName;
  
  constructor(private salonservice:SalonserviceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
                                          let sid:number =parseInt(params.get("id"));
                                          this.salonservice.viewbysalonserviceid(sid).subscribe(data=>this.salondto=data);
                                          });
    this.salonservice.viewallsalonservice().subscribe(data=>{
                                                            this.services = data;
                                                            });
                                                          
            }
  editEmp(){
    this.salonservice.editsalonservice(this.salondto).subscribe(data=>{
                                                                  alert(data);
                                                                  //this.router.navigateByUrl("/byname")
                                                                      },
                                                               error=>{
                                                                          this.errorMsg = JSON.parse(error.error).message;
                                                                      })
            }                                          
}