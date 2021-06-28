import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalonserviceComponent } from './editsalonservice.component';

describe('EditsalonserviceComponent', () => {
  let component: EditsalonserviceComponent;
  let fixture: ComponentFixture<EditsalonserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsalonserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsalonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
