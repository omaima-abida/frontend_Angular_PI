import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommandeService {
    private apiUrl = 'http://localhost:3001/api/commande';

    constructor(private http: HttpClient) { }

    // Ajouter une nouvelle commande
    ajouterCommande(commandeData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, commandeData);
    }

    // Récupérer la liste des commandes
    getListeCommandes(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    // Récupérer les détails d'une commande par numéro de commande
    getDetailsCommande(numeroCommande: string): Observable<any> {
        const url = `${this.apiUrl}/${numeroCommande}`;
        return this.http.get<any>(url);
    }

    // Mettre à jour les informations d'une commande par numéro de commande
    mettreAJourCommande(numeroCommande: string, commandeData: any): Observable<any> {
        const url = `${this.apiUrl}/${numeroCommande}`;
        return this.http.put<any>(url, commandeData);
    }

    // Supprimer une commande par numéro de commande
    supprimerCommande(numeroCommande: string): Observable<any> {
        const url = `${this.apiUrl}/${numeroCommande}`;
        return this.http.delete<any>(url);
    }
}
