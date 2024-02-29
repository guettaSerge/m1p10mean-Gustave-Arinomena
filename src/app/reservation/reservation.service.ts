import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/api/reservations/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}

  
  getreservation(): Observable<any> {
    
    return this.http.get(
      AUTH_API,
      httpOptions
    );
  }

  generate(idService: string, idUser: string, idEmployee: string, dateHeure: string, prixService: string, commission: string, status: string): Observable<any> {
    
    return this.http.post(
      AUTH_API + 'generate',
      {
        idService:"idService",
        idUser:"idUser",
        idEmployee:"idEmployee",
        dateHeure:"dateHeure",
        prixService:"prixService",
        commission:"commission",
        status:"status",
      },
      httpOptions
    );
  }

}
