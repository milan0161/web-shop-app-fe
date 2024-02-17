import {Component, Input} from '@angular/core';
import {CreateOrderProduct} from "../../order/models/orderProduct.model";
import {CartItem} from "../models/cartItem.model";
import {CartService} from "../cart.service";
import {of} from "rxjs";

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  @Input() cartItems: CartItem[] = [];
  totalPrice$ = this.cartService.totalPrice$
  constructor(private cartService: CartService) {
  }
  ngOnInit(){
    console.log(this.cartItems)
  }

  addQuantity(item: CartItem){
    this.cartService.addCartItems(item);
  }
  removeQuantity(item: CartItem){
    this.cartService.removeQuantity(item)
  }

}
