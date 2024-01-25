import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { CustomModule } from '../shared/custom/custom.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AdminProductsPageComponent } from './pages/admin-products-page/admin-products-page.component';

@NgModule({
  declarations: [ProductComponent, ProductsPageComponent, ProductFormComponent, AdminProductsPageComponent],
  imports: [CommonModule, CustomModule, ReactiveFormsModule],
})
  export class ProductModule {}

