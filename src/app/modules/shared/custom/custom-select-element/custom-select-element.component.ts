import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() options: string[] = [];
  @Input() disabled: boolean = false;

  selectedOption!: string;
  showOptions: boolean = false;

  onChange!: (value: string) => void;
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

  selectOption(option: string) {
    this.selectedOption = option;
    this.onChange(option);
    this.onTouched();
    // this.showOptions = false;
    this.toggleOptions();
  }
}
