import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbankaccbyidComponent } from './viewbankaccbyid.component';

describe('ViewbankaccbyidComponent', () => {
  let component: ViewbankaccbyidComponent;
  let fixture: ComponentFixture<ViewbankaccbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbankaccbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbankaccbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
