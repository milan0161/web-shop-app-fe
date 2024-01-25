import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Role } from '../../auth/login/models/login.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() role: Role = 'USER';
}
