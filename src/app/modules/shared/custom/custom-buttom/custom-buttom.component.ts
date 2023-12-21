import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnType } from './types/enumClass.enum';

@Component({
  selector: 'app-custom-buttom',
  templateUrl: './custom-buttom.component.html',
  styleUrls: ['./custom-buttom.component.scss'],
})
export class CustomButtomComponent {
  @Input() text!: string;
  @Input() type: string = 'button';
  @Output() clickButton = new EventEmitter();
  @Input() isDisabled: boolean = false;
  @Input() buttonType: BtnType = 'primary';

  onClick() {
    this.clickButton.emit();
  }
}
