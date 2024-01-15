import {inject} from "@angular/core";
import {UserService} from "../../modules/user/user.service";
import {map} from "rxjs";
import {CanActivateFn} from "@angular/router";
import {RouterService} from "../router/router.service";


export function AuthGuard(): CanActivateFn {
  return () => {
    const userService: UserService = inject(UserService);
    const customRouter: RouterService = inject(RouterService)
    return userService.loggedUser$.pipe(map((user) => {
      if (user) return true
      customRouter.navigate('home')
      return false
    }))
  }
}
