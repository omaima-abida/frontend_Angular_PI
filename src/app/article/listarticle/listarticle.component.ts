// listarticle.component.ts

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: any[] = [];
  articleToEdit: any = null;
  articleToDelete: any = null;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.chargerArticles();
  }

  chargerArticles() {
    this.articleService.getAllArticles().subscribe(
      (response: any) => {
        this.articles = response;
        console.log('Liste des articles chargée avec succès !', this.articles);
      },
      (error: any) => {
        console.error('Erreur lors du chargement de la liste des articles :', error);
      }
    );
  }

  onEdit(article: any): void {
    this.articleToEdit = article;
  }

  onCancelEdit(): void {
    this.articleToEdit = null;
  }

  onSave(article: any): void {
    // Logique pour l'enregistrement de l'article
    // ...
  }

  onDelete(article: any): void {
    this.articleToDelete = article;
  }

  onConfirmDelete(): void {
    // Logique pour la suppression confirmée
    // Après la suppression, réinitialisez articleToDelete
    this.articleToDelete = null;
  }

  onCancelDelete(): void {
    // Logique pour l'annulation de la suppression
    // Après l'annulation, réinitialisez articleToDelete
    this.articleToDelete = null;
  }
}
