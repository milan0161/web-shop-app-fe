import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BtnType } from './types/button-types.types';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() text!: string;
  @Input() type: string = 'button';
  @Output() clickButton = new EventEmitter();
  @Input() isDisabled: boolean = false;
  @Input() buttonType: BtnType = 'primary';

  onClick() {
    this.clickButton.emit();
  }
}
