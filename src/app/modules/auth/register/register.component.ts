import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../utils/validators/confirmPasswordValidator';
import { RegisterDto } from './DTOs/register.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userContactInfo: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        contactPhone: new FormControl('', [Validators.required]),
      }),
    },
    { validators: confirmPasswordValidator }
  );

  register() {
    // console.log(this.registerForm.errors);
    console.log(RegisterDto.toRegisterDto(this.registerForm.value));
  }
}
