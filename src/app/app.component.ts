import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResisterService } from './shared/resister.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    private resisterService: ResisterService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.resisterService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.resisterService.getUser();

      this.username = user.username;
    }

  }

}
