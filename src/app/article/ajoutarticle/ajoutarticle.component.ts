// ajoutarticle.component.ts
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
//import { ArticleService } from '../services/article.service';

interface ApiResponse {
  // Définissez ici la structure de la réponse de votre API
  // Par exemple, si votre API renvoie un objet avec une propriété "message", vous pouvez le définir comme suit :
  // message: string;
  // ...
}

@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent implements OnInit {

  nouvelArticle: any = {};

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    // Initialisations ou traitements supplémentaires si nécessaires
  }

  ajouterArticle() {
    this.articleService.ajouterArticle(this.nouvelArticle).subscribe(
      (response: ApiResponse) => {
        console.log('Article ajouté avec succès !', response);
        // Vous pouvez effectuer d'autres actions après l'ajout, par exemple, réinitialiser le formulaire.
        this.nouvelArticle = {};
      },

    );
  }
}
