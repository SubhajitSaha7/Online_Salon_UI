import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallscheduleComponent } from './viewallschedule.component';

describe('ViewallscheduleComponent', () => {
  let component: ViewallscheduleComponent;
  let fixture: ComponentFixture<ViewallscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
