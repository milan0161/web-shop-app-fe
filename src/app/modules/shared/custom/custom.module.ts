import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomTextInputComponent } from './custom-text-input/custom-text-input.component';
import { CustomSelectElementComponent } from './custom-select-element/custom-select-element.component';
import { CustomSelectMultiComponent } from './custom-select-multi/custom-select-multi.component';
import { CustomSelectWrapperComponent } from './custom-select-wrapper/custom-select-wrapper.component';
import { CustomSelectOptionComponent } from './custom-select-option/custom-select-option.component';
import { ErrorsPipe } from './pipes/errors/errors.pipe';
import { CustomErrorMessageComponent } from './custom-error-message/custom-error-message.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomTextInputComponent,
    CustomSelectElementComponent,
    CustomSelectMultiComponent,
    CustomSelectWrapperComponent,
    CustomSelectOptionComponent,
    ErrorsPipe,
    CustomErrorMessageComponent,
  ],
  imports: [CommonModule],
  exports: [
    CustomButtonComponent,
    CustomTextInputComponent,
    CustomSelectElementComponent,
    CustomSelectWrapperComponent,
    CustomSelectOptionComponent,
    CustomErrorMessageComponent,
  ],
})
export class CustomModule {}
