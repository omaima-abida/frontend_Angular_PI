// // register.component.ts

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { RegisterService } from 'src/app/services/register.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent {
//   email: string = '';
//   password: string = '';
//   firstname: string = '';
//   lastname: string = '';

//   constructor(private registerService: RegisterService, private router: Router) { }

//   onSubmit(): void {
//     // Basic validation
//     if (!this.email || !this.password || !this.firstname || !this.lastname) {
//       // Handle validation error
//       return;
//     }

//     // Call register service to create a new user
//     this.registerService.register(this.email, this.password, this.firstname, this.lastname).subscribe(
//       (response) => {
//         // Successful registration
//         // Handle storing tokens or redirect to another page
//         this.router.navigate(['/dashboard']);
//       },
//       (error) => {
//         // Handle registration error
//         console.error('Registration failed:', error);
//         // Display appropriate error message to the user
//       }
//     );


//   }
// }


// register.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';

  constructor(private registerService: RegisterService, private router: Router) { }

  onSubmit(): void {
    // Basic validation
    if (!this.email || !this.password || !this.firstname || !this.lastname) {
      // Handle validation error
      return;
    }

    // Call register service to create a new user
    this.registerService.register(this.email, this.password, this.firstname, this.lastname).subscribe(
      (response) => {
        // Successful registration
        // Handle storing tokens or redirect to another page
        // For example, navigate to the main route after successful registration
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle registration error
        console.error('Registration failed:', error);
        // Display appropriate error message to the user
      }
    );
  }

  //onRegisterClick(): void {
  // Add your logic here, for example, open the menu
  //console.log('Register button clicked! Open the menu here.');
  // Vous pouvez ajouter la logique pour ouvrir le menu ici
  //}

  onRegisterClick(): void {
    // Add your logic here, for example, navigate to the menu
    this.router.navigate(['/']);
  }
}
