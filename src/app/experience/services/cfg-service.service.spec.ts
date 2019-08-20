import { TestBed } from '@angular/core/testing';

import { CfgServiceService } from './cfg-service.service';

describe('CfgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CfgServiceService = TestBed.get(CfgServiceService);
    expect(service).toBeTruthy();
  });
});
