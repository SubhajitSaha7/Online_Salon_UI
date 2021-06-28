import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentbyidComponent } from './viewpaymentbyid.component';

describe('ViewpaymentbyidComponent', () => {
  let component: ViewpaymentbyidComponent;
  let fixture: ComponentFixture<ViewpaymentbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpaymentbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpaymentbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
