import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { LoginResponse } from 'src/app/modules/auth/login/models/login.model';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  loggedUser$: Observable<LoginResponse | null> = this.userService.loggedUser$;
  constructor(private userService: UserService) {}
}
