import { Component } from '@angular/core';
import { LoginResponse } from 'src/app/modules/auth/login/models/login.model';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  LoggedUser: LoginResponse | null = null;
  constructor(private userService: UserService) {}
  ngOnInit() {}
}
