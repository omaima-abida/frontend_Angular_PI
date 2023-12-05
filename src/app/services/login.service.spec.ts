// login.service.spec.ts

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
    let service: LoginService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LoginService],
        });

        service = TestBed.inject(LoginService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should send a POST request to login', inject(
        [HttpTestingController, LoginService],
        (httpClient: HttpTestingController, loginService: LoginService) => {
            const email = 'test@example.com';
            const password = 'password';

            loginService.login(email, password).subscribe();

            // const req = httpMock.expectOne(`${loginService.apiUrl}/login`);

            const req = httpMock.expectOne(`${service['apiUrl']}/login`);


            expect(req.request.method).toBe('POST');
            expect(req.request.body).toEqual({ email, password });

            req.flush({});
        }
    )
    );
});
