import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class LoginService{
    getCourses(){
       return ['course1', 'course2','course3','course4','course5'];
    }
}