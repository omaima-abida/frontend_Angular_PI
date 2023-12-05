import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LignedecommandeService } from 'src/app/services/lignedecommande.service';



@Component({
  selector: 'app-ajoutlignedecommande',
  templateUrl: './ajoutlignedecommande.component.html',
  styleUrls: ['./ajoutlignedecommande.component.css']
})
export class AjoutlignedecommandeComponent implements OnInit {

  ajoutLigneDeCommandeForm: FormGroup;

  ligneDeCommande: any = {};

  constructor(private fb: FormBuilder, private lignedecommandeService: LignedecommandeService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.ajoutLigneDeCommandeForm = this.fb.group({
      numero_commande: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      quantite: ['', [Validators.required]]
    });
  }

  ajouterLigneDeCommande() {
    if (this.ajoutLigneDeCommandeForm.valid) {
      const formData = this.ajoutLigneDeCommandeForm.value;
      formData.numero_commande = this.ligneDeCommande.numero_commande;

      this.lignedecommandeService.ajouterLigneDeCommande(formData).subscribe(
        (response) => {
          console.log('Ligne de commande ajoutée avec succès :', response);
          this.ajoutLigneDeCommandeForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la ligne de commande :', error);
        }
      );
    } else {
      Object.values(this.ajoutLigneDeCommandeForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  get numeroCommandeControl() {
    return this.ajoutLigneDeCommandeForm.get('numero_commande');
  }

  get referenceControl() {
    return this.ajoutLigneDeCommandeForm.get('reference');
  }

  get quantiteControl() {
    return this.ajoutLigneDeCommandeForm.get('quantite');
  }
}
