import {Component, Input} from '@angular/core';
import {CartItem} from "../models/cartItem.model";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
@Input() cartItem!: CartItem
  constructor(private cartService: CartService){}
  addQuantity(item: CartItem){
    this.cartService.addCartItem(item);
  }
  removeQuantity(item: CartItem){
    this.cartService.removeQuantity(item)
  }
}

