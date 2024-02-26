import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { ResisterService } from '../shared/resister.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private loginService: LoginService, private resiterService: ResisterService) { }

  ngOnInit(): void {
    if (this.resiterService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.resiterService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.loginService.login(username, password).subscribe({
      next: data => {
        this.resiterService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.resiterService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
