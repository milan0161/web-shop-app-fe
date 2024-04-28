import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '../../shared/custom/dialog/dialog.ref';
import { ProductService } from '../product.service';
import { Brand, CreateProductBrand } from '../models/brand.model';
import { BrandService } from '../brand.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  brands$ = this.brandService
    .getBrands()
    .pipe(tap((brands) => this.setDefaultBrandValue(brands[0])));
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
    brand: new FormControl<CreateProductBrand | null>(null, [
      Validators.required,
    ]),
  });
  constructor(
    private dialogRef: DialogRef,
    private productService: ProductService,
    private brandService: BrandService
  ) {}

  createProduct() {
    const { name, price, quantity, brand } = this.addProductForm.value;
    this.productService
      .createProduct({
        name: name!,
        price: price!,
        quantity: quantity!,
        brand: { id: brand?.id! },
      })
      .subscribe((res) => {
        this.dialogRef.close(res);
      });
  }
  close() {
    this.dialogRef.close();
  }

  private setDefaultBrandValue(brand: Brand) {
    this.addProductForm.controls.brand.setValue(brand);
  }
}
