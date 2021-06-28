import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalonservicebyidComponent } from './viewsalonservicebyid.component';

describe('ViewsalonservicebyidComponent', () => {
  let component: ViewsalonservicebyidComponent;
  let fixture: ComponentFixture<ViewsalonservicebyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsalonservicebyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsalonservicebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
