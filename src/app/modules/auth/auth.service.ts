import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register/models/register.model';
import { environment } from '../../../environments/environment.development';
import { Login, User } from './login/models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registerObj: Register): Observable<string> {
    return this.http.post(`${environment.apiUrl}/users`, registerObj, {
      responseType: 'text',
    });
  }
  login(loginObj: Login): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users/auth`, loginObj);
  }
}
