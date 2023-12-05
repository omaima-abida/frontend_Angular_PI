// auth.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
//import { AuthService } from './auth.service';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
        });

        authService = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(authService).toBeTruthy();
    });

    // Ajoutez d'autres tests pour vérifier le comportement d'AuthService
});
