// supprimcommande.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-supprimcommande',
  templateUrl: './supprimcommande.component.html',
  styleUrls: ['./supprimcommande.component.css']
})
export class SupprimCommandeComponent implements OnInit {
  numero_Commande: string;

  constructor(private route: ActivatedRoute, private router: Router, private commandeService: CommandeService) { }

  ngOnInit(): void {
    // Récupérer le numéro de commande depuis les paramètres de l'URL
    this.route.params.subscribe(params => {
      this.numero_Commande = params['numero_commande'];
    });
  }

  confirmerSuppression() {
    // Appeler le service pour supprimer la commande
    this.commandeService.supprimerCommande(this.numero_Commande).subscribe(
      (response) => {
        console.log('Commande supprimée avec succès :', response);
        // Rediriger vers la liste des commandes après la suppression
        this.router.navigate(['/listcommande']);
      },
      (error) => {
        console.error('Erreur lors de la suppression de la commande :', error);
      }
    );
  }

  annulerSuppression() {
    // Rediriger vers la liste des commandes sans effectuer la suppression
    this.router.navigate(['/listcommande']);
  }
}

