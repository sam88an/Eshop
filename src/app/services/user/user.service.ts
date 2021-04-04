import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private userUrlSignup = 'http://localhost/api/users/signup';
  private userLoginUrl = 'http://localhost/api/users/login';
  signup(user: User) {
    return this.http.post(this.userUrlSignup, user);
  }
  login(creadentials: { email: string; password: string }) {
    return this.http.post(this.userLoginUrl, creadentials);
  }
}
