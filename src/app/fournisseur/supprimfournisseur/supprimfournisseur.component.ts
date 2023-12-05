// supprimfournisseur.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur.service';


@Component({
  selector: 'app-supprimfournisseur',
  templateUrl: './supprimfournisseur.component.html',
  styleUrls: ['./supprimfournisseur.component.css']
})
export class SupprimfournisseurComponent implements OnInit {
  fournisseur: any;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID du fournisseur depuis les paramètres de l'URL
    const id_frs = this.route.snapshot.paramMap.get('id_frs');

    // Appeler le service pour récupérer les détails du fournisseur par ID
    this.fournisseurService.getFournisseurById('id_frs').subscribe(
      (response: any) => {
        this.fournisseur = response;
      },
      (error: any) => {
        this.errorMessage = 'Erreur lors de la récupération des détails du fournisseur : ' + error.message;
      }
    );
  }

  // Méthode appelée lors de la confirmation de la suppression
  confirmerSuppression(): void {
    const id_frs = this.fournisseur.id_frs;

    // Appeler le service pour supprimer le fournisseur par ID
    this.fournisseurService.supprimerFournisseur(id_frs).subscribe(
      () => {
        console.log('Fournisseur supprimé avec succès !');
        // Vous pouvez effectuer d'autres actions après la suppression, par exemple, rediriger vers la liste des fournisseurs.
        this.router.navigate(['/liste-fournisseurs']);
      },
      (error: any) => {
        this.errorMessage = 'Erreur lors de la suppression du fournisseur : ' + error.message;
      }
    );
  }

  // Méthode appelée lors de l'annulation de la suppression
  annulerSuppression(): void {
    // Vous pouvez implémenter des actions supplémentaires en cas d'annulation
    // Par exemple, rediriger vers la liste des fournisseurs sans supprimer.
    this.router.navigate(['/liste-fournisseurs']);
  }
}

