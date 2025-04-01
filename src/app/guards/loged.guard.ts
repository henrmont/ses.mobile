import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const logedGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const token = window.localStorage.getItem('token')

  if (token) {
    router.navigate(['/main'])
  }
  return true
};
