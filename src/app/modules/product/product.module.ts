import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CustomModule } from '../shared/custom/custom.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

@NgModule({
  declarations: [ProductComponent, ProductsPageComponent],
  imports: [
    CommonModule,
    CustomModule
  ],
})
  export class ProductModule {}
