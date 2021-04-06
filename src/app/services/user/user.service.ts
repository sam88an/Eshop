import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private userUrlSignup = 'http://localhost/api/users/signup';
  private userLoginUrl = 'http://localhost/api/users/login';
  message!: string;

  signup(user: User) {
    return this.http.post(this.userLoginUrl, user).pipe(
      map((result) => {
        return <{ message: string }>result;
      })
    );
  }
  login(creadentials: { email: string; password: string }) {
    return this.http.post(this.userLoginUrl, creadentials).pipe(
      map((result) => {
        return <loginResponse>result;
      })
    );
  }
}
interface loginResponse {
  token: string;
  message: string;
}
