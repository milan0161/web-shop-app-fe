import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CustomSelectOptionComponent } from '../custom-select-option/custom-select-option.component';
import {
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { map } from 'rxjs';

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
export class CustomSelectWrapperComponent
  implements ControlValueAccessor, AfterContentChecked
{
  @ContentChildren(CustomSelectOptionComponent)
  options?: QueryList<CustomSelectOptionComponent | undefined>;
  showOptions: boolean = false;
  selectedOption!: CustomSelectOptionComponent;
  disabled: boolean = false;

  onChange!: (value: CustomSelectOptionComponent) => void;
  onTouched!: () => void;

  writeValue(obj: any): void {
    this.selectedOption = obj;
    // console.log(this.selectedOption);
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

  ngAfterContentChecked(): void {
    // console.log(this.options, 'content checked');
    // const selected = this.options?.find((x) => x!.isSelected);
  }

  toggleOptions() {
    if (!this.disabled) {
      this.showOptions = !this.showOptions;
    }
  }

  selectOption(option: CustomSelectOptionComponent) {
    this.toggleOptions();
    this.selectedOption = option;
    this.onChange(option);
    this.onTouched();
  }
}
