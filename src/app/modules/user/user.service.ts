import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../auth/login/models/login.model';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private _loggedUser$ = new BehaviorSubject<LoginResponse | null>(null);

  getLoggedUser() {
    return this.http
      .get<LoginResponse>(`${environment.apiUrl}/v1/users/me`)
      .pipe(tap((res) => this.setLoggedInUser(res)));
  }

  setLoggedInUser(res: LoginResponse): void {
    this._loggedUser$.next(res);
  }

  logoutUser() {
    this._loggedUser$.next(null);
  }

  getRoles() {
    return this.http.get(`${environment.apiUrl}/v1/roles`);
  }
  get loggedUser$() {
    return this._loggedUser$.asObservable();
  }
}
