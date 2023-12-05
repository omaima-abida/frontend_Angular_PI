import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LignedecommandeService } from 'src/app/services/lignedecommande.service';
//import { LignedecommandeService } from 'chemin-vers-votre-service-lignedecommande'; // Assurez-vous de l'importer correctement

@Component({
  selector: 'app-supprimlignedecommande',
  templateUrl: './supprimlignedecommande.component.html',
  styleUrls: ['./supprimlignedecommande.component.css']
})
export class SupprimlignedecommandeComponent implements OnInit {
  ligneDeCommande: any = {}; // Assurez-vous que le type correspond à votre modèle

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lignedecommandeService: LignedecommandeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const numeroCommande = params['numero_commande'];
      const reference = params['reference'];

      // Utilisez le service pour récupérer les détails de la ligne de commande à supprimer
      this.lignedecommandeService.getLigneDeCommande(numeroCommande, reference).subscribe(
        (data) => {
          this.ligneDeCommande = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails de la ligne de commande à supprimer', error);
          // Gérer l'erreur, par exemple, rediriger vers une page d'erreur
          this.router.navigate(['/erreur']);
        }
      );
    });
  }

  supprimerLigneDeCommande(): void {
    // Utilisez le service pour supprimer la ligne de commande
    this.lignedecommandeService.supprimerLigneDeCommande(this.ligneDeCommande.numero_commande, this.ligneDeCommande.reference).subscribe(
      () => {
        console.log('Ligne de commande supprimée avec succès');
        // Rediriger vers la liste des lignes de commande après la suppression
        this.router.navigate(['/liste-lignes-commande']);
      },
      (error) => {
        console.error('Erreur lors de la suppression de la ligne de commande', error);
        // Gérer l'erreur, par exemple, afficher un message à l'utilisateur
      }
    );
  }
}
