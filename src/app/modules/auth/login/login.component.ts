import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterService } from 'src/app/core/router/router.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private customRouter: RouterService,
    private userService: UserService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  login() {
    const { username, password } = this.loginForm.value;
    this.authService
      .login({
        username: username!,
        password: password!,
      })
      .subscribe((user) => {
        this.userService.setLoggedInUser(user);
        this.customRouter.navigate('dashboard');
      });
  }
  redirectToRegister() {
    this.customRouter.navigate('register');
  }
}
