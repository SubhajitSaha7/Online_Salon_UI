import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbycustomeridComponent } from './viewbycustomerid.component';

describe('ViewbycustomeridComponent', () => {
  let component: ViewbycustomeridComponent;
  let fixture: ComponentFixture<ViewbycustomeridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbycustomeridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbycustomeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
