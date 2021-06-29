import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserinfoComponent } from './viewuserinfo.component';

describe('ViewuserinfoComponent', () => {
  let component: ViewuserinfoComponent;
  let fixture: ComponentFixture<ViewuserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
