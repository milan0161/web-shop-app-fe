import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  triggerDropdownAnimation,
  triggerToggleAnimation,
} from './animations/drowdown.animation';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [triggerDropdownAnimation, triggerToggleAnimation],
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() text?: string;
  @Output() chosedOption: EventEmitter<string> = new EventEmitter<string>();
  dropDownOpen: boolean = false;
  constructor() {}

  toggleDropDown() {
    this.dropDownOpen = !this.dropDownOpen;
  }

  clickedOutside() {
    this.dropDownOpen = false;
  }

  emitValue(option: string) {
    this.chosedOption.emit(option);
  }
}
