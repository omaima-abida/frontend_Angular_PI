// logout-button.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-logout-button',
  template: '<button (click)="logout()">Logout</button>',
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
}
