import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/api/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        "email":email,
        "password":password
      },
      httpOptions
    );
  }

  register(name: string, surname: string, email: string, password: string, confirmPassword: string): Observable<any> {
    /*console.log(name);
    console.log(surname);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);*/
    return this.http.post(
      AUTH_API + 'register',
      {
        "name":name,
        "surname":surname,
        "email":email,
        "password":password,
        "confirmPassword":confirmPassword
      },
      httpOptions
    );
  }

  /*logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }*/
}
