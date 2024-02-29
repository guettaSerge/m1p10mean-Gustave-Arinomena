import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { ResisterService } from '../shared/resister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private loginService: LoginService, private resiterService: ResisterService, private router: Router) { }

  ngOnInit(): void {
    if (this.resiterService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.loginService.login(email, password).subscribe({
      next: data => {
        this.resiterService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/reservation']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

}
