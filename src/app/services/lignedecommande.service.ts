import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';  // Ajout de throwError
import { catchError, tap } from 'rxjs/operators';  // Ajout de catchError et tap

@Injectable({
  providedIn: 'root'
})
export class LignedecommandeService {
  private apiUrl = 'http://localhost:3001/api/lignedecommande';

  constructor(private http: HttpClient) { }

  // Ajouter une nouvelle ligne de commande
  ajouterLigneDeCommande(ligneDeCommandeData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ligneDeCommandeData).pipe(
      catchError((error) => {
        console.error('Une erreur s\'est produite lors de l\'ajout d\'une nouvelle ligne de commande:', error);
        return throwError(error);  // Correction : Utilisation de throwError au lieu de throw
      }),
      tap(() => console.log('Nouvelle ligne de commande ajoutée avec succès'))
    );
  }

  // Récupérer la liste des lignes de commande
  getListeLignesDeCommande(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Une erreur s\'est produite lors de la récupération de la liste des lignes de commande:', error);
        return throwError(error);
      })
    );
  }

  // Récupérer les détails d'une ligne de commande par numéro de commande et référence
  getLigneDeCommande(numeroCommande: string, reference: string): Observable<LignedecommandeService> {
    const url = `${this.apiUrl}/${numeroCommande}/${reference}`;
    return this.http.get<LignedecommandeService>(url).pipe(
      catchError((error) => {
        console.error(`Une erreur s'est produite lors de la récupération des détails de la ligne de commande (${numeroCommande}, ${reference}):`, error);
        return throwError(error);
      })
    );
  }

  // Mettre à jour les informations d'une ligne de commande par numéro de commande et référence
  modifierLigneDeCommande(numeroCommande: string, reference: string, ligneDeCommandeData: any): Observable<LignedecommandeService> {
    const url = `${this.apiUrl}/${numeroCommande}/${reference}`;
    return this.http.put<LignedecommandeService>(url, ligneDeCommandeData).pipe(
      catchError((error) => {
        console.error(`Une erreur s'est produite lors de la mise à jour de la ligne de commande (${numeroCommande}, ${reference}):`, error);
        return throwError(error);
      })
    );
  }

  // Supprimer une ligne de commande par numéro de commande et référence
  supprimerLigneDeCommande(numeroCommande: string, reference: string): Observable<any> {
    const url = `${this.apiUrl}/${numeroCommande}/${reference}`;
    return this.http.delete<any>(url).pipe(
      catchError((error) => {
        console.error(`Une erreur s'est produite lors de la suppression de la ligne de commande (${numeroCommande}, ${reference}):`, error);
        return throwError(error);
      })
    );
  }
}
