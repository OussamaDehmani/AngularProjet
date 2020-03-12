import { TestBed } from '@angular/core/testing';

import { FourniService } from './fourni.service';

describe('FourniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FourniService = TestBed.get(FourniService);
    expect(service).toBeTruthy();
  });
});
