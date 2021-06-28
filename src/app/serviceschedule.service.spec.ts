import { TestBed } from '@angular/core/testing';

import { ServicescheduleService } from './serviceschedule.service';

describe('ServicescheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicescheduleService = TestBed.get(ServicescheduleService);
    expect(service).toBeTruthy();
  });
});
