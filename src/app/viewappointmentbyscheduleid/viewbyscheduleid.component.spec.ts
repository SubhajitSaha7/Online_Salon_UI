import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyscheduleidComponent } from './viewbyscheduleid.component';

describe('ViewbyscheduleidComponent', () => {
  let component: ViewbyscheduleidComponent;
  let fixture: ComponentFixture<ViewbyscheduleidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbyscheduleidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbyscheduleidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
