import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {map} from 'rxjs';
import { UserService } from 'src/app/modules/user/user.service';

export function AdminGuard(): CanActivateFn {
  return () => inject(UserService).loggedUser$.pipe(map(user => user?.role === 'ADMINISTRATOR'))
}




