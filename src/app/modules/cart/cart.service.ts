import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, from, of, map, switchMap} from 'rxjs';
import { CreateOrderProduct } from '../order/models/orderProduct.model';
import {CartItem} from "./models/cartItem.model";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems$ = new BehaviorSubject<CartItem[]>([]);
  itemsInCart$ = this._cartItems$.pipe(map((cartItems) => cartItems.map(item => item)))
  totalPrice$:Observable<number> = this._cartItems$.pipe(switchMap((items) => of(this.calculateTotalPrice(items))))
  constructor() {}

  get cartItems$() {
    return this._cartItems$.asObservable();
  }

  addCartItems(item: CartItem): void {
    const itemExist = this._cartItems$.value.find(
      (current) => current.product.id == item.product.id
    );
    itemExist
      ? this.addItemQuantity(itemExist)
      : this._cartItems$.next([...this._cartItems$.value, item]);
  }
  removeQuantity(item: CartItem){
    const itemExist = this._cartItems$.value.find(
      (current) => current.product.id == item.product.id
    );
    itemExist && item.quantity > 1? this.removeItemQuantity(itemExist) : this.removeFromCart(item)

  }
  private addItemQuantity(item: CartItem) {
    item.quantity += 1;
    this._cartItems$.next(this._cartItems$.value);
  }
  private removeItemQuantity(item: CartItem){
    item.quantity -= 1;
    this._cartItems$.next(this._cartItems$.value)
  }
  private removeFromCart(item: CartItem){
    this._cartItems$.next(this._cartItems$.getValue().filter((ci => ci.product.id !== item.product.id)))
  }

  private calculateTotalPrice(items: CartItem[]){
    return items.reduce((acc: number, cur: CartItem)=> acc += (cur.quantity * cur.product.price), 0)
  }
}
