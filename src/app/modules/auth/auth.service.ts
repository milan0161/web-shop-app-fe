import { Injectable } from '@angular/core';
import { Register } from './register/models/register.model';
import { Login, LoginResponse } from './login/models/login.model';
import { BaseHttpService } from 'src/app/core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  constructor() {
    super('USERS');
  }

  register(registerObj: Register) {
    return this.httpClient.post(this.baseUrl, registerObj, {
      responseType: 'text',
    });
  }
  login(loginObj: Login) {
    return this.httpClient.post<LoginResponse>(
      `${this.baseUrl}/auth`,
      loginObj
    );
  }

  logout() {
    return this.httpClient.post(`${this.baseUrl}/logout`, null, {
      responseType: 'text',
    });
  }

  refresh() {
    return this.httpClient.post(`${this.baseUrl}/refresh-token`, null, {
      responseType: 'text',
    });
  }
}
