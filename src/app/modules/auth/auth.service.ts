import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../auth/register/models/register.model';
import { environment } from '../../../environments/environment.development';
import { Login, LoginResponse } from './login/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registerObj: Register) {
    return this.http.post(`/v1/${environment.apiUrl}/users`, registerObj, {
      responseType: 'text',
    });
  }
  login(loginObj: Login) {
    return this.http.post<LoginResponse>(`/v1/users/auth`, loginObj);
  }

  logout() {
    // document.cookie = `Authorization=; max-age=0`;
  }
}
