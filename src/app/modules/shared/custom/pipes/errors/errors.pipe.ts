import { Pipe, PipeTransform } from '@angular/core';
import { PredefinedErrorMessages } from '../../utils/errors/error-messages';
import { ValidationErrors } from '@angular/forms';
@Pipe({
  name: 'errors',
})
export class ErrorsPipe implements PipeTransform {
  errors: any = PredefinedErrorMessages;
  transform(value: ValidationErrors): string {
    return this.handleValidationError(value);
  }

  handleValidationError(value: ValidationErrors): string {
    const listOfErrKeys = Object.keys(value);
    for (const errKey of listOfErrKeys) {
      if (this.errors[errKey]) value[errKey] = this.errors[errKey];
    }
    return Object.values(value).toString();
  }
}
