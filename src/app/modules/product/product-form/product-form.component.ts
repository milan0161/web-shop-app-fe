import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
    addProductForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      price: new FormControl<number | null>(null, [Validators.required]),
      quantity: new FormControl<number | null>(null, [Validators.required])
    })
  constructor(private productService: ProductService) {
  }
  createProduct(){
    const {quantity,price,name} = this.addProductForm.value
     this.productService.createProduct({quantity:quantity!, price: price!, name:name!}).subscribe()
  }
}
