import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-custom-select-option',
  templateUrl: './custom-select-option.component.html',
  styleUrls: ['./custom-select-option.component.scss'],
})
export class CustomSelectOptionComponent implements OnInit {
  @Input() value: any = '';
  constructor(private controlContainer: ControlContainer) {}
  ngOnInit(): void {
    console.log(this.controlContainer.control);
  }
  choseOption(value: any) {
    console.log(value);
    console.log(this.controlContainer);
  }
}
