import { TestBed } from '@angular/core/testing';

import { SesadmService } from './sesadm.service';

describe('SesadmService', () => {
  let service: SesadmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesadmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
