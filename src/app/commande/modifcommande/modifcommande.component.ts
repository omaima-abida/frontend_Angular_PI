import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-modifcommande',
  templateUrl: './modifcommande.component.html',
  styleUrls: ['./modifcommande.component.css']
})
export class ModifCommandeComponent implements OnInit {

  modifCommandeForm: FormGroup;
  // Utilisez des propriétés distinctes pour stocker les valeurs actuelles
  numero_Commande: string;
  date_Commande: string;
  id_frs: string;

  // Injectez ActivatedRoute, Router, FormBuilder et CommandeService dans le constructeur
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commandeService: CommandeService
  ) { }

  ngOnInit(): void {
    // Récupérez le numéro de commande à partir de l'URL
    this.numero_Commande = this.route.snapshot.params['numero_Commande'];

    // Initialisez le formulaire et récupérez les détails de la commande
    this.initForm();
    this.getDetailsCommande();
  }

  initForm() {
    this.modifCommandeForm = this.fb.group({
      numero_Commande: ['', [Validators.required]],
      date_Commande: ['', [Validators.required]],
      id_frs: ['', [Validators.required]]
    });
  }

  getDetailsCommande() {
    // Utilisez le service pour obtenir les détails de la commande
    this.commandeService.getDetailsCommande(this.numero_Commande).subscribe(
      (response) => {
        // Stockez les valeurs actuelles dans les propriétés distinctes
        this.numero_Commande = response.numero_commande;
        this.date_Commande = response.date_commande;
        this.id_frs = response.id_frs;

        // Mettez à jour les valeurs dans le formulaire
        this.modifCommandeForm.patchValue({
          numero_Commande: this.numero_Commande,
          date_Commande: this.date_Commande,
          id_frs: this.id_frs
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de la commande :', error);
      }
    );
  }

  modifierCommande() {
    if (this.modifCommandeForm.valid) {
      const formData = this.modifCommandeForm.value;

      // Appel du service pour mettre à jour la commande avec formData
      this.commandeService.mettreAJourCommande(this.numero_Commande, formData).subscribe(
        (response) => {
          console.log('Commande modifiée avec succès :', response);
          // Rediriger vers la liste des commandes après la modification réussie
          this.router.navigate(['/liste-commandes']);
        },
        (error) => {
          console.error('Erreur lors de la modification de la commande :', error);
        }
      );
    } else {
      // Marquer les champs du formulaire comme touchés pour afficher les erreurs
      Object.values(this.modifCommandeForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Ajoutez des getters pour faciliter l'accès aux champs du formulaire dans le template
  get numero_CommandeControl() {
    return this.modifCommandeForm.get('numero_Commande');
  }

  get date_CommandeControl() {
    return this.modifCommandeForm.get('date_Commande');
  }

  get id_frsControl() {
    return this.modifCommandeForm.get('id_frs');
  }
}

