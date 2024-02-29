import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { ServicesService } from '../shared/services.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  form: any = {
    idService:null,
    idUser:null,
    idEmployee:null,
    dateHeure:null,
    prixService:null,
    commission:null,
    status:null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  reservations:any[]=[];
  services:any[]=[];
  combine: any[]=[];

  constructor(private reservationService: ReservationService,private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.reservationService.getreservation().subscribe({
      next: data => {
        this.reservations = data;
      },
      error: err => {
        console.error(err);
      }
    });

    this.servicesService.getServices().subscribe({
      next: data => {
        this.services = data;
        this.combine = this.reservations.concat(this.services);
      },
      error: err => {
        console.error(err);
      }
    });
  }


  onSubmit(): void {
    const { idService, idUser, idEmployee, dateHeure, prixService, commission, status} = this.form;

    this.reservationService.generate(idService, idUser, idEmployee, dateHeure, prixService, commission, status).subscribe({
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

  reloadPage(): void {
    window.location.reload();
  }
}
