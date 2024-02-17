import { Component } from '@angular/core';
import {CartService} from "../cart.service";
import {RouterService} from "../../../core/router/router.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
items$ = this.cartService.cartItems$
  constructor(private cartService: CartService, private routerService: RouterService) {
  }
  goToProducts(){
    this.routerService.navigate('products')
  }
}
