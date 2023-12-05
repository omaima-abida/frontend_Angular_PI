// register.service.spec.ts

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterService } from './register.service';
//import { RegisterService } from './register.service';

describe('RegisterService', () => {
    let service: RegisterService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RegisterService],
        });

        service = TestBed.inject(RegisterService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should send a POST request to register', inject(
        [HttpTestingController, RegisterService],
        (httpClient: HttpTestingController, registerService: RegisterService) => {
            const email = 'test@example.com';
            const password = 'password';
            const firstname = 'John';
            const lastname = 'Doe';

            registerService.register(email, password, firstname, lastname).subscribe();

            //   const req = httpMock.expectOne(`${registerService.apiUrl}/register`);

            const req = httpMock.expectOne(`${service['apiUrl']}/register`);


            expect(req.request.method).toBe('POST');
            expect(req.request.body).toEqual({ email, password, firstname, lastname });

            req.flush({});
        }
    ));
});
