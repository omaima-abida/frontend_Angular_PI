// supprimarticle.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-supprimarticle',
  templateUrl: './supprimarticle.component.html',
  styleUrls: ['./supprimarticle.component.css']
})
export class SupprimArticleComponent {

  @Input() article: any;
  @Output() confirmDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelDelete: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  confirmerSuppression(): void {
    this.articleService.supprimerArticle(this.article._id).subscribe(
      (response: any) => {
        console.log('Article supprimé avec succès !', response);
        // Émettre l'événement de confirmation de suppression
        this.confirmDelete.emit();
      },
      (error: any) => {
        console.error('Erreur lors de la suppression de l\'article :', error);
      }
    );
  }

  annulerSuppression(): void {
    // Émettre l'événement d'annulation de suppression
    this.cancelDelete.emit();
  }
}
