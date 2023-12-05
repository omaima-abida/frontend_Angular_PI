import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LignedecommandeService } from './lignedecommande.service';

//import { LignedecommandeService } from './lignedecommande.service';

describe('LignedecommandeService', () => {
    let service: LignedecommandeService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LignedecommandeService]
        });
        service = TestBed.inject(LignedecommandeService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add a new ligne de commande', () => {
        const mockLigneDeCommandeData = { /* Provide mock data for testing */ };

        service.ajouterLigneDeCommande(mockLigneDeCommandeData).subscribe(response => {
            expect(response).toBeDefined();
            /* Add additional assertions based on your API response */
        });

        const req = httpTestingController.expectOne(`${service['apiUrl']}`);
        expect(req.request.method).toEqual('POST');
    });

    it('should get the list of lignes de commande', () => {
        service.getListeLignesDeCommande().subscribe(response => {
            expect(response).toBeDefined();
            /* Add additional assertions based on your API response */
        });

        const req = httpTestingController.expectOne(`${service['apiUrl']}`);
        expect(req.request.method).toEqual('GET');
    });

    // Add more test cases for other service methods (getDetailsLigneDeCommande, mettreAJourLigneDeCommande, supprimerLigneDeCommande)
});
