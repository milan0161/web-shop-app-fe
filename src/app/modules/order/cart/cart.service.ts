import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { CreateOrderProduct } from '../models/orderProduct.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems$ = new BehaviorSubject<CreateOrderProduct[]>([]);
  constructor() {}

  get cartItems$() {
    return this._cartItems$.asObservable();
  }

  addCartItems(item: CreateOrderProduct): void {
    const itemExist = this._cartItems$.value.find(
      (current) => current.product.id == item.product.id
    );
    itemExist
      ? this.addItemQuantity(itemExist)
      : this._cartItems$.next([...this._cartItems$.value, item]);
  }

  private addItemQuantity(item: CreateOrderProduct) {
    item.quantity += 1;
    this._cartItems$.next(this._cartItems$.value);
  }
}
