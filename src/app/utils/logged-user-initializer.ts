import { inject } from '@angular/core';
import { UserService } from '../modules/user/user.service';

export function loggedUserInitializer() {
  const userService = inject(UserService);
  userService.getLoggedUser();
}
