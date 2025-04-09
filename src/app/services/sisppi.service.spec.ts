import { TestBed } from '@angular/core/testing';

import { SisppiService } from './sisppi.service';

describe('SisppiService', () => {
  let service: SisppiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SisppiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
