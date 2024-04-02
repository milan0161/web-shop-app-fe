import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartPageComponent} from "./cart-page/cart-page.component";
import { CartItemsComponent } from './cart-items/cart-items.component';
import {CustomModule} from "../shared/custom/custom.module";
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [CartPageComponent, CartItemsComponent, CartItemComponent],
  imports: [
    CommonModule,
    CustomModule
  ],
  exports: [CartPageComponent]
})
export class CartModule { }
