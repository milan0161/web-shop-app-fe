import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '../../shared/custom/dialog/dialog.ref';
import { ProductService } from '../product.service';
import { Brand, CreateProductBrand } from '../models/brand.model';
import { BrandService } from '../brand.service';
import { tap } from 'rxjs';
import { ProductAdmin } from '../models/product.model';
import { DIALOG_DATA } from '../../shared/custom/dialog/dialog.tokens';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements AfterContentInit {
  private isEdit: boolean = false;
  brands$ = this.brandService.getBrands().pipe(
    tap((brands) => {
      if (!this.isEdit) this.setDefaultBrandValue(brands[0]);
    })
  );

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
    private brandService: BrandService,
    @Inject(DIALOG_DATA) private productData: ProductAdmin
  ) {}

  ngAfterContentInit(): void {
    if (this.productData) {
      this.isEdit = true;
      this.setFormValue();
    }
  }

  submitForm() {
    !this.isEdit ? this.createProduct() : this.editProduct();
  }
  close() {
    this.dialogRef.close();
  }

  private createProduct() {
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

  private editProduct() {
    const { name, price, quantity, brand } = this.addProductForm.value;
    this.productService
      .updateProduct({
        name: name!,
        price: price!,
        quantity: quantity!,
        brand: { id: brand?.id! },
        id: this.productData.id,
      })
      .subscribe(() => this.dialogRef.close());
  }

  private setDefaultBrandValue(brand: Brand) {
    this.addProductForm.controls.brand.setValue(brand);
  }

  private setFormValue() {
    this.addProductForm.patchValue({
      brand: this.productData.brand,
      name: this.productData.name,
      price: this.productData.price,
      quantity: this.productData.quantity,
    });
  }
}
