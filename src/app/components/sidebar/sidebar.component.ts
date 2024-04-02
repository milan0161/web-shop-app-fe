import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { UserService } from 'src/app/modules/user/user.service';
import { SIDEBAR_CONFIG } from './config/sidebar-config';
import {RouterService} from "../../core/router/router.service";

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
    private userService: UserService,
    private router: RouterService
  ) {}

  logout() {
    this.authService.logout().subscribe(() => this.handleLogout());
  }

  private handleLogout(){
    this.userService.logoutUser();
    this.router.navigate('home')
  }
}
