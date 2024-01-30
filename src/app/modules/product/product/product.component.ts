import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Role } from '../../auth/login/models/login.model';
import {map} from "rxjs";
import {OrderService} from "../../order/order.service";
import {CreateOrderProduct} from "../../order/models/orderProduct.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() role: Role = 'USER';
  constructor(private orderService: OrderService) {
  }
  addToCart(){
    const {id} = this.product
    console.log(this.product)
  }
}
