import {
  Component,
  Host,
  Input,
  OnInit,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

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
export class CustomTextInputComponent implements ControlValueAccessor, OnInit {
  textValue: string | number = '';
  disabled: boolean = false;
  @Input() formControlName?: string;
  @Input() type: string = 'text';
  @Input() title: string = '';
  @Input() invalid: boolean | undefined = false;
  isValid: boolean = true;
  onChange!: (value: string | number) => void;
  onTouched!: () => void;
  control?: AbstractControl;

  constructor(
    @Optional() @SkipSelf() private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    this.setFormControl();
  }

  writeValue(value: string | number): void {
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
    if (this.type === 'number') this.textValue = Number(this.textValue);
    this.onChange(this.textValue);
    this.onTouched();
    this.checkIsValid();
  }

  private setFormControl() {
    if (this.controlContainer && this.formControlName) {
      this.control = this.controlContainer.control?.get(
        this.formControlName
      ) as FormControl;
    }
  }
  private checkIsValid() {
    this.isValid =
      !this.control!.invalid && (this.control!.dirty || this.control!.touched);
  }
}
