import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { CustomModule } from '../shared/custom/custom.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [CommonModule, CustomModule, ReactiveFormsModule],
})
export class ProductModule {}
