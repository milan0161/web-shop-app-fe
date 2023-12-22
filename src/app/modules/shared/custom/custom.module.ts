import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomTextInputComponent } from './custom-text-input/custom-text-input.component';
import { CustomSelectElementComponent } from './custom-select-element/custom-select-element.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomTextInputComponent,
    CustomSelectElementComponent,
  ],
  imports: [CommonModule],
  exports: [
    CustomButtonComponent,
    CustomTextInputComponent,
    CustomSelectElementComponent,
  ],
})
export class CustomModule {}
