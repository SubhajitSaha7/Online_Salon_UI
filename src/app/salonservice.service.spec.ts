import { TestBed } from '@angular/core/testing';

import { SalonserviceService } from './salonservice.service';

describe('SalonserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalonserviceService = TestBed.get(SalonserviceService);
    expect(service).toBeTruthy();
  });
});
