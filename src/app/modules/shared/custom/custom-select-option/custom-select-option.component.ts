import { Component, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-select-option',
  templateUrl: './custom-select-option.component.html',
  styleUrls: ['./custom-select-option.component.scss'],
})
export class CustomSelectOptionComponent implements OnInit {
  @Input() value: any;
  isSelected: boolean = false;
  private parentControl: FormControl | null = null;
  constructor(@Optional() @SkipSelf() ngControl: NgControl) {
    this.parentControl = ngControl.control as FormControl;
  }
  ngOnInit(): void {
  }
  chooseOption() {
    this.parentControl?.setValue(this.value);
  }
}
