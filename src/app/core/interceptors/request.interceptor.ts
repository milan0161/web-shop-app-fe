import {
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../../modules/auth/auth.service';

export const requestInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  req = req.clone({ withCredentials: true });
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401 && !req.url.includes('/users/me')) {
        return authService.refresh().pipe(switchMap(() => next(req)));
      }
      return throwError(() => error);
    })
  );
};
