import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ModiflignedecommandeComponent } from './modiflignedecommande.component'

describe('ModiflignedecommandeComponent', () => {
    let component: ModiflignedecommandeComponent;
    let fixture: ComponentFixture<ModiflignedecommandeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ModiflignedecommandeComponent],
            imports: [FormsModule],
        });

        fixture = TestBed.createComponent(ModiflignedecommandeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should update quantite on form submission', () => {
        const newQuantite = 10;

        // Assign a value to numero_commande and reference for testing purposes
        component.ligneDeCommande = {
            numero_commande: '123',
            reference: 'ABC',
            quantite: 5,
        };

        // Trigger input changes
        fixture.detectChanges();

        // Set the new quantite value in the form
        const quantiteInput: HTMLInputElement = fixture.nativeElement.querySelector('#quantite');
        quantiteInput.value = newQuantite.toString();
        quantiteInput.dispatchEvent(new Event('input'));

        // Trigger form submission
        const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
        form.dispatchEvent(new Event('submit'));

        // Assert that the component's quantite property has been updated
        expect(component.ligneDeCommande.quantite).toBe(newQuantite);
    });
});

