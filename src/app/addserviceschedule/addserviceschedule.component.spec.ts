import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicescheduleComponent } from './addserviceschedule.component';

describe('AddservicescheduleComponent', () => {
  let component: AddservicescheduleComponent;
  let fixture: ComponentFixture<AddservicescheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddservicescheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
