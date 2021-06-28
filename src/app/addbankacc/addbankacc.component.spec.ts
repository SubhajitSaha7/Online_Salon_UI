import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbankaccComponent } from './addbankacc.component';

describe('AddbankaccComponent', () => {
  let component: AddbankaccComponent;
  let fixture: ComponentFixture<AddbankaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbankaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbankaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
