import { Component } from '@angular/core';
import {ProductService} from "../../modules/product/product.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products$ = this.productService.getProducts()
  constructor(private productService: ProductService) {
  }
}
