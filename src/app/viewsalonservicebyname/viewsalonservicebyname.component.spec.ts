import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalonservicebynameComponent } from './viewsalonservicebyname.component';

describe('ViewsalonservicebynameComponent', () => {
  let component: ViewsalonservicebynameComponent;
  let fixture: ComponentFixture<ViewsalonservicebynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsalonservicebynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsalonservicebynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
