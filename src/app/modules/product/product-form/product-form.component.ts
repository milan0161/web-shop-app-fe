import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '../../shared/custom/dialog/dialog.ref';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  addProductForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(1)],
      nonNullable: true,
    }),
    quantity: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(1)],
      nonNullable: true,
    }),
  });
  constructor(
    private dialogRef: DialogRef,
    private productService: ProductService
  ) {}

  createProduct() {
    const { name, price, quantity } = this.addProductForm.value;
    this.productService
      .createProduct({ name: name!, price: price!, quantity: quantity! })
      .subscribe((res) => {
        this.dialogRef.close(res);
      });
  }
  close() {
    this.dialogRef.close();
  }
}
