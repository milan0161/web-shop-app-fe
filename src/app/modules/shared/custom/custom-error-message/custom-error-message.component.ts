import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-custom-error-message',
  templateUrl: './custom-error-message.component.html',
  styleUrls: ['./custom-error-message.component.scss'],
})
export class CustomErrorMessageComponent {
  @Input() message: ValidationErrors | null = null;
}
