import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateOrder, Order } from './models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

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
}
