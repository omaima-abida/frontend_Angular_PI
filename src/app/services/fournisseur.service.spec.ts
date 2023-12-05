// fournisseur.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FournisseurService } from './fournisseur.service';


describe('FournisseurService', () => {
    let service: FournisseurService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [FournisseurService]
        });

        service = TestBed.inject(FournisseurService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should send a POST request to add a fournisseur', () => {
        const mockFournisseur = {
            id_frs: '1',
            raison_sociale: 'Nom du fournisseur',
            adresse: 'Adresse du fournisseur',
            telephone: '123-456-7890'
        };

        service.ajouterFournisseur(mockFournisseur).subscribe(response => {
            expect(response).toEqual(mockFournisseur);
        });

        const req = httpTestingController.expectOne('http://localhost:3001/api/fournisseur');
        expect(req.request.method).toEqual('POST');
        req.flush(mockFournisseur);
    });
});
