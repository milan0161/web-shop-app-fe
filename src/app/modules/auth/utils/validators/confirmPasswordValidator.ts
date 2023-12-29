import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  // console.log(control.value.password)
  console.log(control.get('password')!.value);

  return control.value.password === control.value.confirm_password
    ? null
    : { NoMatchPasswords: 'Passwords does not match' };
};
