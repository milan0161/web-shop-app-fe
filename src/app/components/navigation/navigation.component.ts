import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/modules/auth/login/models/login.model';
import { UserService } from 'src/app/modules/user/user.service';
import {RouterService} from "../../core/router/router.service";
import {CartService} from "../../modules/cart/cart.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  loggedUser$: Observable<LoginResponse | null> = this.userService.loggedUser$;
  cart$ = this.cartService.cartItems$;
  constructor(
    private userService: UserService,
    private cartService: CartService,
    private routerService: RouterService
  ) {}

  navigateToCart(){
    this.routerService.navigate("cart")
  }
}
