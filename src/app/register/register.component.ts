import { Component } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    name: null,
    surname: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
  
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private loginService: LoginService) { }

  onSubmit(): void {
    const { name, surname, email, password, confirmPassword } = this.form;
    /*console.log(name);
    console.log(surname);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);*/

    this.loginService.register(name,surname, email, password, confirmPassword).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
