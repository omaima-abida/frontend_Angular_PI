// modiffournisseur.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur.service';


@Component({
  selector: 'app-modiffournisseur',
  templateUrl: './modiffournisseur.component.html',
  styleUrls: ['./modiffournisseur.component.css']
})
export class ModifFournisseurComponent implements OnInit {

  fournisseur: any = {
    id_frs: String,
    raison_social: String,
    adresse: String,
    telephone: String,

  }; // Assurez-vous que votre modèle correspond à la structure de votre fournisseur

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    // Récupérer l'id_frs à partir des paramètres de l'URL
    this.route.params.subscribe(params => {
      const id_frs = params['id_frs'];
      // Appeler le service pour récupérer les détails du fournisseur par id_frs
      this.fournisseurService.getFournisseurById(id_frs).subscribe(response => {
        this.fournisseur = response;
      });
    });
  }

  modifierFournisseur(): void {
    // Appeler le service pour mettre à jour les informations du fournisseur
    this.fournisseurService.modifierFournisseur(this.fournisseur.id_frs, this.fournisseur).subscribe(
      (response: any) => {
        console.log('Fournisseur modifié avec succès !', response);
        // Vous pouvez effectuer d'autres actions après la modification, par exemple, rediriger vers la liste des fournisseurs.
        this.router.navigate(['/liste-fournisseurs']);
      },
      (error: any) => {
        console.error('Erreur lors de la modification du fournisseur :', error);
      }
    );
  }
}
