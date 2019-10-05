import { TestBed } from '@angular/core/testing';

import { BullionMetalService } from './bullion-metal.service';

describe('BullionMetalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BullionMetalService = TestBed.get(BullionMetalService);
    expect(service).toBeTruthy();
  });
});
