import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-viewsalonservice',
  templateUrl: './viewsalonservice.component.html',
  styleUrls: ['./viewsalonservice.component.css']
})
export class ViewsalonserviceComponent implements OnInit {

  constructor(public storageservice:StorageService) { }

  ngOnInit() {
  }

}
