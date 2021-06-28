import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallpaymentComponent } from './viewallpayment.component';

describe('ViewallpaymentComponent', () => {
  let component: ViewallpaymentComponent;
  let fixture: ComponentFixture<ViewallpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
