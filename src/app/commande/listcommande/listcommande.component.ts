// listcommande.component.ts
import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListCommandeComponent implements OnInit {

  listeCommandes: any[] = []; // Assurez-vous que le type correspond à la structure de vos données

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.chargerListeCommandes();
  }

  chargerListeCommandes() {
    this.commandeService.getListeCommandes().subscribe(
      (commandes) => {
        this.listeCommandes = commandes;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des commandes :', error);
      }
    );
  }
}

