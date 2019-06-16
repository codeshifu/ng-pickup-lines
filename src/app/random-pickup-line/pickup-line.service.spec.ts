import { TestBed } from '@angular/core/testing';

import { PickupLineService } from './pickup-line.service';

describe('PickupLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PickupLineService = TestBed.get(PickupLineService);
    expect(service).toBeTruthy();
  });
});
