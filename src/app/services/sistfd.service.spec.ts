import { TestBed } from '@angular/core/testing';

import { SistfdService } from './sistfd.service';

describe('SistfdService', () => {
  let service: SistfdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistfdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
