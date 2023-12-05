// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(): void {
    // Basic validation
    if (!this.email || !this.password) {
      // Handle validation error
      return;
    }

    // Call login service to authenticate user
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        // Successful login
        // Handle storing tokens or redirect to another page
        // Navigate to the main route after successful login
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
        // Display appropriate error message to the user
      }
    );
  }

  onLoginClick(): void {
    // Add your logic here, for example, navigate to the menu
    this.router.navigate(['/']);
  }
}
