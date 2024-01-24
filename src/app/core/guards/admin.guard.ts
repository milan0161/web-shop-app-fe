import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { filter, map } from 'rxjs';
import { UserService } from 'src/app/modules/user/user.service';

export function AdminGuard(): CanActivateFn {
  return () =>
    inject(UserService).loggedUser$.pipe(
      filter((user) => {
        console.log(user?.role === 'ADMINISTRATOR');
        return user!.role === 'ADMINISTRATOR';
      }),
      map((user) => !!user)
    );
}
