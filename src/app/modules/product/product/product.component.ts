import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Role } from '../../auth/login/models/login.model';
import { CartService } from '../../order/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() role: Role = 'USER';
  constructor(private cartService: CartService) {}
  addToCart() {
    const { id } = this.product;
    this.cartService.addCartItems({
      product: {
        id,
      },
      quantity: 1,
    });
  }
}
