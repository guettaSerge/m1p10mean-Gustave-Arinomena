import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/api/services/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  constructor(private http: HttpClient) {}

  
  getServices(): Observable<any> {
    
    return this.http.get(
      AUTH_API,
      httpOptions
    );
  }
}
