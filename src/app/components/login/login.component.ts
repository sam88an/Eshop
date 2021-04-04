import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}
  form!: HTMLFormElement;
  error: string | undefined;
  success: string | undefined;
  ngOnInit(): void {}
  login(event: Event) {
    event.preventDefault();
    this.form = <HTMLFormElement>event.target;
    let creadentials = this.readFormValue();
    this.userService.login(creadentials).subscribe({
      next: (result) => {
        console.log(result);
        this.success = 'Login success...';
        this.error = undefined;
      },
      error: (response: HttpErrorResponse) => {
        console.log(response);
        this.error = response.error.error.message;
        this.success = undefined;
      },
    });
  }
  readFormValue() {
    let email = (<HTMLInputElement>this.form.elements.namedItem('email')).value;
    let password = (<HTMLInputElement>this.form.elements.namedItem('password'))
      .value;
    let creadentials = {
      email,
      password,
    };
    return creadentials;
  }
}
