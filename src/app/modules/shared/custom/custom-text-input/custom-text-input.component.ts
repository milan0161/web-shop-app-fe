import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-text-input',
  templateUrl: './custom-text-input.component.html',
  styleUrls: ['./custom-text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomTextInputComponent,
      multi: true,
    },
  ],
})
export class CustomTextInputComponent implements ControlValueAccessor {
  textValue: string = '';
  disabled: boolean = false;
  @Input() type: string = 'text';
  @Input() title: string = '';
  @Input() invalid: boolean | undefined = false;
  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    this.textValue = value;
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

  onValueChange(e: any) {
    if (this.disabled) return;
    this.textValue = e.target.value;
    this.onChange(this.textValue);
    this.onTouched();
  }
}
