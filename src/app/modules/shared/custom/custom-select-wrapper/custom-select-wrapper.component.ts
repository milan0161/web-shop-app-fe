import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { CustomSelectOptionComponent } from '../custom-select-option/custom-select-option.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select-wrapper',
  templateUrl: './custom-select-wrapper.component.html',
  styleUrls: ['./custom-select-wrapper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectWrapperComponent,
      multi: true,
    },
  ],
})
export class CustomSelectWrapperComponent implements ControlValueAccessor {
  @ContentChildren(CustomSelectOptionComponent)
  options?: QueryList<CustomSelectOptionComponent | undefined>;
  showOptions: boolean = true;
  selectedOption!: CustomSelectOptionComponent;
  disabled: boolean = false;
  onChange!: (value: CustomSelectOptionComponent) => void;
  onTouched!: () => void;

  writeValue(obj: any): void {
    this.toggleOptions();
    this.selectedOption = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleOptions() {
    if (!this.disabled) {
      this.showOptions = !this.showOptions;
    }
  }

  selectOption(option: CustomSelectOptionComponent) {
    this.selectedOption = option;
    this.onChange(option);
    this.onTouched();
    this.toggleOptions();
  }
}
