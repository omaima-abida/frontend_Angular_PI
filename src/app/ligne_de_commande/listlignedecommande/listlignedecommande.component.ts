// listlignedecommande.component.ts
import { Component, OnInit } from '@angular/core';
import { LignedecommandeService } from 'src/app/services/lignedecommande.service';
//import { LigneDeCommandeService } from 'chemin-vers-le-service';  // Remplacez 'chemin-vers-le-service' par le chemin réel vers le service

@Component({
  selector: 'app-listlignedecommande',
  templateUrl: './listlignedecommande.component.html',
  styleUrls: ['./listlignedecommande.component.css']
})
export class ListLigneDeCommandeComponent implements OnInit {
  listeLignesDeCommande: any[];  // Assurez-vous de définir le type correct pour vos données

  constructor(private ligneDeCommandeService: LignedecommandeService) { }

  ngOnInit(): void {
    this.getListeLignesDeCommande();
  }

  getListeLignesDeCommande() {
    this.ligneDeCommandeService.getListeLignesDeCommande().subscribe(
      (data) => {
        this.listeLignesDeCommande = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la liste des lignes de commande :', error);
      }
    );
  }

  afficherDetails(numeroCommande: string, reference: string) {
    // Implémentez la logique pour afficher les détails de la ligne de commande
    console.log('Détails de la ligne de commande :', numeroCommande, reference);
  }

  editerLigneDeCommande(numeroCommande: string, reference: string) {
    // Implémentez la logique pour éditer la ligne de commande
    console.log('Édition de la ligne de commande :', numeroCommande, reference);
  }

  supprimerLigneDeCommande(numeroCommande: string, reference: string) {
    // Implémentez la logique pour supprimer la ligne de commande
    console.log('Suppression de la ligne de commande :', numeroCommande, reference);
  }
}

