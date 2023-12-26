import { Component, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-select-option',
  templateUrl: './custom-select-option.component.html',
  styleUrls: ['./custom-select-option.component.scss'],
})
export class CustomSelectOptionComponent implements OnInit {
  @Input() value: any;
  isSelected: boolean = false;
  public x = new FormControl();
  valueChanges$ = new Subject();
  constructor() {}
  ngOnInit(): void {
    // console.log(this.controlContainer.control);
  }
  chooseOption() {
    this.valueChanges$.next(this.value);
  }
}
