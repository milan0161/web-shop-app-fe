import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { LoginResponse } from 'src/app/modules/auth/login/models/login.model';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  LoggedUser: LoginResponse | null = null;
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadLoggedUser();
  }

  private loadLoggedUser() {
    this.userService.loggedUser$.subscribe((user) => (this.LoggedUser = user));
  }

  logout() {
    this.authService.logout();
    this.userService.logoutUser();
  }
}
