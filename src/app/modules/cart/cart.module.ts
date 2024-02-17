import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartPageComponent} from "./cart-page/cart-page.component";
import { CartItemsComponent } from './cart-items/cart-items.component';
import {CustomModule} from "../shared/custom/custom.module";



@NgModule({
  declarations: [CartPageComponent, CartItemsComponent],
  imports: [
    CommonModule,
    CustomModule
  ],
  exports: [CartPageComponent]
})
export class CartModule { }
