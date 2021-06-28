import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewserviceschedulebyidComponent } from './viewserviceschedulebyid.component';

describe('ViewserviceschedulebyidComponent', () => {
  let component: ViewserviceschedulebyidComponent;
  let fixture: ComponentFixture<ViewserviceschedulebyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewserviceschedulebyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewserviceschedulebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
