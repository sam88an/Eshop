import { UserService } from './../../services/user/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  error: string | undefined;
  success: string | undefined;
  navigateToLoginPage() {
    this.router.navigate(['login']);
  }
  readValueFromForm(form: HTMLFormElement) {
    // console.log(event.target);

    let name = (<HTMLInputElement>form.elements.namedItem('name')).value;
    let email = (<HTMLInputElement>form.elements.namedItem('email')).value;
    let password = (<HTMLInputElement>form.elements.namedItem('password'))
      .value;
    let phone = (<HTMLInputElement>form.elements.namedItem('phone')).value;
    let user: User = {
      name,
      email,
      password,
      phone,
    };
    return user;
  }
  signup(event: Event) {
    event.preventDefault();
    let form = <HTMLFormElement>event.target;
    let user = this.readValueFromForm(form);
    this.createUser(user, form);
  }
  createUser(user: User, form: HTMLFormElement) {
    this.userService.signup(user).subscribe({
      next: (result) => {
        this.success = 'Create user success...';
        this.error = undefined;
        form.reset();
        this.navigateToLoginPage();
      },
      error: (response: HttpErrorResponse) => {
        console.log(response);
        this.error = response.error.error.message;
        this.success = undefined;
      },
    });
  }
}
