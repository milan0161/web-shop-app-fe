import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { UserService } from 'src/app/modules/user/user.service';
import { SIDEBAR_CONFIG } from './config/sidebar-config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentUser$ = this.userService.loggedUser$;
  sidebars = SIDEBAR_CONFIG;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  logout() {
    this.userService.logoutUser();
    this.authService.logout();
  }
}
