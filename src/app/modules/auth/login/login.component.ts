import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  login() {
    const { username, password } = this.loginForm.value;
    this.authService
      .login({ username: username!, password: password! })
      .subscribe((response) => console.log(response));
  }
  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
