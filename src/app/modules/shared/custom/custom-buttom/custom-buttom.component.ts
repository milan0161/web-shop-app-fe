import { Component, Input, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PROVIDER_CONFIG: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomButtomComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-buttom',
  templateUrl: './custom-buttom.component.html',
  styleUrls: ['./custom-buttom.component.scss'],
  providers: [PROVIDER_CONFIG],
})
export class CustomButtomComponent implements ControlValueAccessor {
  @Input() disabled: boolean = false;
  onChange: any;
  text: string = 'Click';
  writeValue(obj: any): void {
    this.text = obj;
    console.log(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onClick() {}
}
