import { AfterContentInit, Component, Input } from '@angular/core';
import { Role } from '../../auth/login/models/login.model';
import { CartService } from '../../cart/cart.service';
import { ProductAdmin, ProductUser } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements AfterContentInit {
  @Input() product!: ProductAdmin | ProductUser;
  @Input() role: Role = 'USER';
  brand: any = '';
  constructor(private cartService: CartService) {}

  ngAfterContentInit(): void {
    if ('brandName' in this.product) {
      this.brand = this.product.brandName;
    } else {
      this.brand = this.product.brand.brandName;
    }
  }
  addToCart() {
    const { id, name, price } = this.product;
    this.cartService.addCartItem({
      product: {
        id,
        name,
        price,
      },
      quantity: 1,
    });
  }
}
