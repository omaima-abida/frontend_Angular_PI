// article.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:3001/api/articles'; // Assurez-vous d'avoir le bon endpoint pour votre API

  constructor(private http: HttpClient) { }

  // Récupérer tous les articles
  getAllArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer un article par son ID
  getArticleById(articleId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${articleId}`);
  }

  // Ajouter un nouvel article
  ajouterArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }

  // Mettre à jour un article
  mettreAJourArticle(articleId: string, nouvelArticle: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${articleId}`, nouvelArticle);
  }

  // Supprimer un article
  supprimerArticle(articleId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${articleId}`);
  }

  modifierArticle(articleId: string, article: any): Observable<any> {
    const url = `${this.apiUrl}/${articleId}`;
    return this.http.put(url, article);
  }

  getArticle(articleId: string): Observable<any> {
    const url = `${this.apiUrl}/${articleId}`;
    return this.http.get(url);
  }

}
