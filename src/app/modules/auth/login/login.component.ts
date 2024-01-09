import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterService } from 'src/app/core/router/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private customRouter: RouterService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  login() {
    const { username, password } = this.loginForm.value;
    this.authService
      .login({ username: username!, password: password! })
      .subscribe();
  }
  redirectToRegister() {
    this.customRouter.navigate('register');
  }
}
