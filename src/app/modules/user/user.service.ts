import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginResponse } from '../auth/login/models/login.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  loggedUser = new BehaviorSubject<LoginResponse | null>(null);

  getLoggedUser() {
    this.http
      .get<LoginResponse>(`${environment.apiUrl}/users/me`)
      .subscribe((value) => {
        this.loggedUser.next(value);
      });
  }
}
