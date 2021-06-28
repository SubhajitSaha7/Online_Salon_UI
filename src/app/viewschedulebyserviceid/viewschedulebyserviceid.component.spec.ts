import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewschedulebyserviceidComponent } from './viewschedulebyserviceid.component';

describe('ViewbyserviceidComponent', () => {
  let component: ViewschedulebyserviceidComponent;
  let fixture: ComponentFixture<ViewschedulebyserviceidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewschedulebyserviceidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewschedulebyserviceidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
