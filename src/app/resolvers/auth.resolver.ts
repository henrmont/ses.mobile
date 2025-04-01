import { ResolveFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authResolver: ResolveFn<boolean> = (route, state) => {
  return inject(AuthService).me()
};
