import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {CustomModule} from "../shared/custom/custom.module";



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    CustomModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
