import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtomComponent } from './custom-buttom/custom-buttom.component';
import { CustomTextInputComponent } from './custom-text-input/custom-text-input.component';

@NgModule({
  declarations: [CustomButtomComponent, CustomTextInputComponent],
  imports: [CommonModule],
  exports: [CustomButtomComponent, CustomTextInputComponent],
})
export class CustomModule {}
