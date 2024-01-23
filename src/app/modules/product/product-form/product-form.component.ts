import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { DialogRef } from '../../shared/custom/dialog/dialog.ref';
import { DIALOG_DATA } from '../../shared/custom/dialog/dialog.tokens';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  addProductForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    quantity: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  constructor(private dialogRef: DialogRef) {}

  createProduct() {
    this.dialogRef.close(this.addProductForm.value);
  }
  close() {
    this.dialogRef.close();
  }
}
