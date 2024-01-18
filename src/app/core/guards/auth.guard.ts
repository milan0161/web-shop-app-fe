import { inject } from '@angular/core';
import { UserService } from '../../modules/user/user.service';
import { map } from 'rxjs';
import { CanActivateFn } from '@angular/router';

export function AuthGuard(): CanActivateFn {
  return () => inject(UserService).loggedUser$.pipe(map((user) => !!user));
}
