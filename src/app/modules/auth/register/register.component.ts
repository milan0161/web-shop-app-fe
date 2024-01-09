import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../utils/validators/confirmPasswordValidator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RouterService } from 'src/app/core/router/router.service';

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

  constructor(
    private authService: AuthService,
    private customRouter: RouterService
  ) {}

  register() {
    const { firstName, lastName, username, password, userContactInfo } =
      this.registerForm.value;

    this.authService
      .register({
        username: username!,
        password: password!,
        firstName: firstName!,
        lastName: lastName!,
        userContactInfo: {
          contactPhone: userContactInfo!.contactPhone!,
          email: userContactInfo!.email!,
        },
      })
      .subscribe((response) => this.customRouter.navigate('login'));
  }
  redirectToLogin() {
    this.customRouter.navigate('login');
  }
}
