import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectInput } from '../models/select-element.types';

@Component({
  selector: 'app-custom-select-element',
  templateUrl: './custom-select-element.component.html',
  styleUrls: ['./custom-select-element.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectElementComponent,
      multi: true,
    },
  ],
})
export class CustomSelectElementComponent implements ControlValueAccessor {
  @Input() options: SelectInput[] = [];
  @Input() disabled: boolean = false;

  selectedOption!: SelectInput;
  showOptions: boolean = false;

  onChange!: (value: SelectInput) => void;
  onTouched!: () => void;

  writeValue(obj: any): void {
    console.log(obj);
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

  selectOption(option: SelectInput) {
    this.selectedOption = option;
    this.onChange(option);
    this.onTouched();
    // this.showOptions = false;
    this.toggleOptions();
  }
}
