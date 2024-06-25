import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.scss'],
})
export class ProductOptionsComponent {
  options = ['Remove', 'Edit'];
  @Output() option = new EventEmitter();

  selectedOption(option: string) {
    this.option.emit(option);
  }
}
