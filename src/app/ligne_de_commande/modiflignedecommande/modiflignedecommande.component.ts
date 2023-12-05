import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LignedecommandeService } from 'src/app/services/lignedecommande.service';
//import { LignedecommandeService } from 'chemin-vers-votre-service-lignedecommande'; // Assurez-vous de l'importer correctement

@Component({
    selector: 'app-modiflignedecommande',
    templateUrl: './modiflignedecommande.component.html',
    styleUrls: ['./modiflignedecommande.component.css']
})
export class ModiflignedecommandeComponent implements OnInit {
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

            // Utilisez le service pour récupérer les détails de la ligne de commande
            this.lignedecommandeService.getLigneDeCommande(numeroCommande, reference).subscribe(
                (data) => {
                    this.ligneDeCommande = data;
                },
                (error) => {
                    console.error('Erreur lors de la récupération des détails de la ligne de commande', error);
                    // Gérer l'erreur, par exemple, rediriger vers une page d'erreur
                    this.router.navigate(['/erreur']);
                }
            );
        });
    }

    modifierLigneDeCommande(): void {
        // Utilisez le service pour mettre à jour la ligne de commande
        this.lignedecommandeService.modifierLigneDeCommande(this.ligneDeCommande.numero_commande, this.ligneDeCommande.reference, this.ligneDeCommande).subscribe(
            (data) => {
                console.log('Ligne de commande modifiée avec succès', data);
                // Rediriger vers la page de détails de la ligne de commande modifiée
                this.router.navigate(['/details', this.ligneDeCommande.numero_commande, this.ligneDeCommande.reference]);
            },
            (error) => {
                console.error('Erreur lors de la modification de la ligne de commande', error);
                // Gérer l'erreur, par exemple, afficher un message à l'utilisateur
            }
        );
    }
}

