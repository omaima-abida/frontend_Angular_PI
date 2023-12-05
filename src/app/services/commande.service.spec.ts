import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommandeService } from './commande.service';

describe('CommandeService', () => {
    let service: CommandeService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CommandeService]
        });
        service = TestBed.inject(CommandeService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add a new command', () => {
        const mockCommande = { /* ... mock command data ... */ };
        service.ajouterCommande(mockCommande).subscribe(response => {
            expect(response).toEqual(mockCommande);
        });

        const request = httpMock.expectOne('http://localhost:3001/api/commande');
        expect(request.request.method).toBe('POST');
        request.flush(mockCommande);
    });

    it('should get the list of commands', () => {
        const mockCommandes = [{ /* ... mock command data ... */ }, { /* ... another mock command data ... */ }];
        service.getListeCommandes().subscribe(response => {
            expect(response).toEqual(mockCommandes);
        });

        const request = httpMock.expectOne('http://localhost:3001/api/commande');
        expect(request.request.method).toBe('GET');
        request.flush(mockCommandes);
    });

    // Add more test cases for other service methods
});
