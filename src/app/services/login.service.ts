// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private apiUrl = 'http://localhost:3001/api/login';

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        // Make an HTTP request to your backend for login
        const body = { email, password };
        return this.http.post(`${this.apiUrl}/login`, body);
    }
}
