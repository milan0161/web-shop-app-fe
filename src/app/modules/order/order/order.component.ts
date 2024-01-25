import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  @Input() order!: Order;
  constructor() {}
}
