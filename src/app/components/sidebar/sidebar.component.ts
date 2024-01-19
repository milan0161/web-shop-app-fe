import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  logout() {
    this.userService.logoutUser();
    this.authService.logout();
  }
}
