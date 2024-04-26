import {
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../../modules/auth/auth.service';
import { UserService } from 'src/app/modules/user/user.service';

export const requestInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  const userService = inject(UserService);
  req = req.clone({ withCredentials: true });
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401 && req.url.includes('/users/me')) {
        userService.logoutUser();
        return authService.refresh().pipe(switchMap(() => next(req)));
      }
      return throwError(() => error);
    })
  );
};
