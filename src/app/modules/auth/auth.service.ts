import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register/models/register.model';
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
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/v1/users/auth`,
      loginObj
    );
  }

  logout() {
    return this.http.post<void>('/v1/users/logout', null);
  }

  refresh(){
    return this.http.post('/v1/users/refresh-token',null)
  }
}
