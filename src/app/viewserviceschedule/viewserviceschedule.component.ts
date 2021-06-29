import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-viewserviceschedule',
  templateUrl: './viewserviceschedule.component.html',
  styleUrls: ['./viewserviceschedule.component.css']
})
export class ViewservicescheduleComponent implements OnInit {

  constructor(public storageservice:StorageService) { }

  ngOnInit() {
  }

}
