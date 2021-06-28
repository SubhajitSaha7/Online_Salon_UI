import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalonserviceComponent } from './addsalonservice.component';

describe('AddsalonserviceComponent', () => {
  let component: AddsalonserviceComponent;
  let fixture: ComponentFixture<AddsalonserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalonserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
