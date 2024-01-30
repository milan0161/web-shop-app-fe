import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateOrder, Order } from './models/order.model';
import {BehaviorSubject, map, mergeMap, Observable, of, switchMap} from "rxjs";
import {CreateOrderProduct} from "./models/orderProduct.model";

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  private _item$: BehaviorSubject<CreateOrderProduct | null> = new BehaviorSubject<CreateOrderProduct | null>(null)


  createOrder(order: CreateOrder) {
    return this.http.post<Order>('/v1/orders', order);
  }

  getOrders() {
    return this.http.get<Order[]>('/v1/orders');
  }

  getMostPopularOrders() {
    return this.http.get('/v1/orders/most-popular');
  }
  getMyOrders() {
    return this.http.get('v1/orders/me');
  }

  // get cartItem$(){
  //   return this._item$.asObservable()
  // }

  addToCart(productId: string){
    this._item$.next({
      product: {
        id: productId
      },
      quantity: 1
    })
  }
}
