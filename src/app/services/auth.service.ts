// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

    login(email: string, password: string): void {
        // Logique de connexion ici
        // ...

        // Mettez à jour le statut de connexion
        this.isLoggedInSubject.next(true);
    }

    logout(): void {
        // Logique de déconnexion ici
        // ...

        // Mettez à jour le statut de connexion
        this.isLoggedInSubject.next(false);
    }

    // Vous pouvez ajouter d'autres méthodes ou propriétés nécessaires
}
