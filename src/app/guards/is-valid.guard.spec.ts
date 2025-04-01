import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { isValidGuard } from './is-valid.guard';

describe('isValidGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isValidGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
