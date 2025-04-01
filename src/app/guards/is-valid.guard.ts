import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

export const isValidGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const user = inject(AuthService).me()
  const token = window.localStorage.getItem('token')

  return new Observable<boolean>(obs => {
    user.subscribe({
      next: (response) => {
        if (response.is_valid) {
          obs.next(true);
        } else {
          obs.next(false);
          window.localStorage.clear();
          router.navigate(['/auth'])
        }
      },
      error: () => {
        obs.next(false);
        window.localStorage.clear();
        router.navigate(['/auth'])
      }
    })
  });
};
