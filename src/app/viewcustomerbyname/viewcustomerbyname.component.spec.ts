import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerbynameComponent } from './viewcustomerbyname.component';

describe('ViewcustomerbynameComponent', () => {
  let component: ViewcustomerbynameComponent;
  let fixture: ComponentFixture<ViewcustomerbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
