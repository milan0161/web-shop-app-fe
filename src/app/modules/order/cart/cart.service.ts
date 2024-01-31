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

  addCartItems(item: CreateOrderProduct) {
    const itemExist = this._cartItems$.value.find(
      (current) => current.product.id == item.product.id
    );
    if (itemExist) {
      itemExist.quantity += 1;
      return this._cartItems$.next(this._cartItems$.value);
    }
    this._cartItems$.next([...this._cartItems$.value, item]);
  }
}
