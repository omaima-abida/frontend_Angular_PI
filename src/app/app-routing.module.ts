import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutarticleComponent } from './article/ajoutarticle/ajoutarticle.component';
import { ListArticleComponent } from './article/listarticle/listarticle.component';
import { ModifArticleComponent } from './article/modifarticle/modifarticle.component';
import { SupprimArticleComponent } from './article/supprimarticle/supprimarticle.component';
import { AjoutFournisseurComponent } from './fournisseur/ajoutfournisseur/ajoutfournisseur.component';
import { ListFournisseurComponent } from './fournisseur/listfournisseur/listfournisseur.component';
import { ModifFournisseurComponent } from './fournisseur/modiffournisseur/modiffournisseur.component';
import { SupprimfournisseurComponent } from './fournisseur/supprimfournisseur/supprimfournisseur.component';
import { AjoutCommandeComponent } from './commande/ajoutcommande/ajoutcommande.component';
import { ListCommandeComponent } from './commande/listcommande/listcommande.component';
import { ModifCommandeComponent } from './commande/modifcommande/modifcommande.component';
import { SupprimCommandeComponent } from './commande/supprimcommande/supprimcommande.component';
import { AjoutlignedecommandeComponent } from './ligne_de_commande/ajoutlignedecommande/ajoutlignedecommande.component';
import { ListLigneDeCommandeComponent } from './ligne_de_commande/listlignedecommande/listlignedecommande.component';
import { SupprimlignedecommandeComponent } from './ligne_de_commande/supprimlignedecommande/supprimlignedecommande.component';
import { ModiflignedecommandeComponent } from './ligne_de_commande/modiflignedecommande/modiflignedecommande.component';
import { RegisterComponent } from './authentification/register/register.component';
import { LoginComponent } from './authentification/login/login.component';




const routes: Routes = [
  { path: 'ajoutarticle', component: AjoutarticleComponent },
  { path: 'listarticle', component: ListArticleComponent },
  { path: 'modifarticle', component: ModifArticleComponent },
  { path: 'supprimarticle', component: SupprimArticleComponent },
  { path: 'ajoutfournisseur', component: AjoutFournisseurComponent },
  { path: 'listfournisseur', component: ListFournisseurComponent },
  { path: 'modiffournisseur', component: ModifFournisseurComponent },
  { path: 'supprimfournisseur', component: SupprimfournisseurComponent },
  { path: 'ajoutcommande', component: AjoutCommandeComponent },
  { path: 'listcommande', component: ListCommandeComponent },
  { path: 'modifcommande', component: ModifCommandeComponent },
  { path: 'supprimcommande', component: SupprimCommandeComponent },
  { path: 'ajoutlignedecommande', component: AjoutlignedecommandeComponent },
  { path: 'listlignedecommande', component: ListLigneDeCommandeComponent },
  { path: 'modiflignedecommande', component: ModiflignedecommandeComponent },
  { path: 'supprimlignedecommande', component: SupprimlignedecommandeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



