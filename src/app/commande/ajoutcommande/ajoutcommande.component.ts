import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-ajoutcommande',
  templateUrl: './ajoutcommande.component.html',
  styleUrls: ['./ajoutcommande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  ajoutCommandeForm: FormGroup;

  // Déclarez les propriétés modifiables selon le modèle de commande
  numero_commande: string;
  date_commande: string;
  id_frs: string;

  constructor(private fb: FormBuilder, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.ajoutCommandeForm = this.fb.group({
      numero_commande: ['', [Validators.required]],
      date_commande: ['', [Validators.required]],
      id_frs: ['', [Validators.required]]
    });
  }

  ajouterCommande() {
    if (this.ajoutCommandeForm.valid) {
      const formData = this.ajoutCommandeForm.value;
      // Utilisez les propriétés du modèle de commande
      formData.numero_commande = this.numero_commande;
      formData.date_commande = this.date_commande;
      formData.id_frs = this.id_frs;

      // Appel du service pour ajouter la commande avec formData
      this.commandeService.ajouterCommande(formData).subscribe(
        (response) => {
          console.log('Commande ajoutée avec succès :', response);
          // Réinitialiser le formulaire après l'ajout réussi
          this.ajoutCommandeForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la commande :', error);
        }
      );
    } else {
      // Marquer les champs du formulaire comme touchés pour afficher les erreurs
      Object.values(this.ajoutCommandeForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Ajoutez des getters pour faciliter l'accès aux champs du formulaire dans le template
  get numero_commandeControl() {
    return this.ajoutCommandeForm.get('numero_commande');
  }

  get date_commandeControl() {
    return this.ajoutCommandeForm.get('date_commande');
  }

  get id_frsControl() {
    return this.ajoutCommandeForm.get('id_frs');
  }
}
