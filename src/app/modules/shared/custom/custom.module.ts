import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomTextInputComponent } from './custom-text-input/custom-text-input.component';
import { CustomSelectElementComponent } from './custom-select-element/custom-select-element.component';
import { CustomSelectMultiComponent } from './custom-select-multi/custom-select-multi.component';
import { CustomSelectWrapperComponent } from './custom-select-wrapper/custom-select-wrapper.component';
import { CustomSelectOptionComponent } from './custom-select-option/custom-select-option.component';
import { ErrorsPipe } from './pipes/errors/errors.pipe';
import { CustomErrorMessageComponent } from './custom-error-message/custom-error-message.component';
import { RsdPipe } from './pipes/currency/rsd.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationSizeComponent } from './pagination/pagination-size/pagination-size.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ClickOutsideDirective } from 'src/app/modules/shared/directives/click-outside.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    RsdPipe,
    PaginationComponent,
    PaginationSizeComponent,
    DropdownComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CustomButtonComponent,
    CustomTextInputComponent,
    CustomSelectElementComponent,
    CustomSelectWrapperComponent,
    CustomSelectOptionComponent,
    CustomErrorMessageComponent,
    RsdPipe,
    PaginationComponent,
    PaginationSizeComponent,
    DropdownComponent,
  ],
})
export class CustomModule {}
