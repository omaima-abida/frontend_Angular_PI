// listfournisseur.component.ts
import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-listfournisseur',
  templateUrl: './listfournisseur.component.html',
  styleUrls: ['./listfournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs: any[] = []; // Assurez-vous que le type correspond à votre modèle de fournisseur

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.fetchFournisseurs();
  }

  fetchFournisseurs() {
    this.fournisseurService.getAllFournisseurs().subscribe(
      (data: any[]) => {
        this.fournisseurs = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des fournisseurs :', error);
      }
    );

    // fetchFournisseurs() {
    //   this.apiService.getFournisseurs().subscribe(
    //     (data) => {
    //       // Traitement des données
    //     },
    //     (error) => {
    //       console.error('Erreur lors de la récupération des fournisseurs :', error);
    //     }
    //   );
    // }


  }
}
