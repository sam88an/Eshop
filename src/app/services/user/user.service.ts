import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private userUrlSignup = 'http://localhost/api/users/signup';
  private userLoginUrl = 'http://localhost/api/users/login';
  message!: string;
  clog!: loginResponse[];
  private saveTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  signup(user: User) {
    return this.http.post(this.userLoginUrl, user).pipe(
      map((result) => {
        return <{ message: string }>result;
      })
    );
  }
  login(creadentials: { email: string; password: string }) {
    return this.http.post<loginResponse>(this.userLoginUrl, creadentials).pipe(
      map((result: loginResponse) => {
        this.saveTokenToLocalStorage(result.token);
        console.log(result.token);
        return result.token.toString;
      })
    );
  }
}
interface loginResponse {
  token: string;
  message: string;
}
