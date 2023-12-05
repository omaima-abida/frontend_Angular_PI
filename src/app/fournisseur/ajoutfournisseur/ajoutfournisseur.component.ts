// ajoutfournisseur.component.ts
import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/services/fournisseur.service';


@Component({
  selector: 'app-ajoutfournisseur',
  templateUrl: './ajoutfournisseur.component.html',
  styleUrls: ['./ajoutfournisseur.component.css']
})
export class AjoutFournisseurComponent implements OnInit {

  nouveauFournisseur: any = {
    id_frs: '',
    raison_sociale: '',
    adresse: '',
    telephone: ''
  };

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    // Initialisations ou traitements supplémentaires si nécessaires
  }

  ajouterFournisseur() {
    this.fournisseurService.ajouterFournisseur(this.nouveauFournisseur).subscribe(
      (response: any) => {
        console.log('Fournisseur ajouté avec succès !', response);
        // Vous pouvez effectuer d'autres actions après l'ajout, par exemple, réinitialiser le formulaire.
        this.nouveauFournisseur = {};
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du fournisseur :', error);
      }
    );
  }
}

