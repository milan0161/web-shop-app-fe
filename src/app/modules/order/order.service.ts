import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateOrder} from "./models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: CreateOrder){
    this.http.post('/v1/orders', order)
  }

}
