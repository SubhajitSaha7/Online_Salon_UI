import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.css']
})
export class ViewpaymentComponent implements OnInit {

  constructor(public storageservice:StorageService) { }

  ngOnInit() {
  }

}
