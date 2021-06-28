import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalonserviceComponent } from './viewsalonservice.component';

describe('ViewsalonserviceComponent', () => {
  let component: ViewsalonserviceComponent;
  let fixture: ComponentFixture<ViewsalonserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsalonserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsalonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
