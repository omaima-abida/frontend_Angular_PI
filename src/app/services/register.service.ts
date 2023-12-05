// register.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'your_api_url';

  constructor(private http: HttpClient) {}

  register(email: string, password: string, firstname: string, lastname: string): Observable<any> {
    // Make an HTTP request to your backend for registration
    const body = { email, password, firstname, lastname };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
}
