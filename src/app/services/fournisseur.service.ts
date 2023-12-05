// fournisseur.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FournisseurService {
    private apiUrl = 'http://localhost:3001/api/fournisseur';

    constructor(private http: HttpClient) { }

    // Ajouter un nouveau fournisseur
    ajouterFournisseur(fournisseur: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, fournisseur);
    }

    // Récupérer tous les fournisseurs
    getAllFournisseurs(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    // Récupérer un fournisseur par son ID
    getFournisseurById(id_frs: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id_frs}`);
    }

    // Mettre à jour un fournisseur
    modifierFournisseur(id_frs: string, nouveauFournisseur: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id_frs}`, nouveauFournisseur);
    }

    // Supprimer un fournisseur
    supprimerFournisseur(id_frs: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id_frs}`);
    }
    getFournisseur(id_frs: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id_frs}`);
    }
}
