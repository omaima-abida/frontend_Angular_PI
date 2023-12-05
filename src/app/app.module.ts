//import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListArticleComponent } from './article/listarticle/listarticle.component';
import { AjoutarticleComponent } from './article/ajoutarticle/ajoutarticle.component';
import { SupprimArticleComponent } from './article/supprimarticle/supprimarticle.component';
import { ModifArticleComponent } from './article/modifarticle/modifarticle.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ListFournisseurComponent } from './fournisseur/listfournisseur/listfournisseur.component';
import { ModifFournisseurComponent } from './fournisseur/modiffournisseur/modiffournisseur.component';
import { SupprimfournisseurComponent } from './fournisseur/supprimfournisseur/supprimfournisseur.component';
import { AjoutFournisseurComponent } from './fournisseur/ajoutfournisseur/ajoutfournisseur.component';
//import { ArticleService } from './services/article.service';
import { AjoutCommandeComponent } from './commande/ajoutcommande/ajoutcommande.component';
import { ListCommandeComponent } from './commande/listcommande/listcommande.component';
import { ModifCommandeComponent } from './commande/modifcommande/modifcommande.component';
import { SupprimCommandeComponent } from './commande/supprimcommande/supprimcommande.component';
import { AjoutlignedecommandeComponent } from './ligne_de_commande/ajoutlignedecommande/ajoutlignedecommande.component';
import { ListLigneDeCommandeComponent } from './ligne_de_commande/listlignedecommande/listlignedecommande.component';
import { SupprimlignedecommandeComponent } from './ligne_de_commande/supprimlignedecommande/supprimlignedecommande.component';
import { ModiflignedecommandeComponent } from './ligne_de_commande/modiflignedecommande/modiflignedecommande.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
//import { LogoutButtonComponent } from './logout-button/logout-button.component';








@NgModule({
  declarations: [
    AppComponent,
    ListArticleComponent,
    AjoutarticleComponent,
    ModifArticleComponent,
    SupprimArticleComponent,
    MenuComponent,
    AjoutFournisseurComponent,
    ListFournisseurComponent,
    ModifFournisseurComponent,
    SupprimfournisseurComponent,
    AjoutCommandeComponent,
    ListCommandeComponent,
    ModifCommandeComponent,
    SupprimCommandeComponent,
    AjoutlignedecommandeComponent,
    ListLigneDeCommandeComponent,
    ModiflignedecommandeComponent,
    SupprimlignedecommandeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'listarticle', component: ListArticleComponent },
      { path: 'modifarticle', component: ModifArticleComponent },
      { path: 'listfournisseur', component: ListFournisseurComponent },
      { path: 'ajoutcommande', component: AjoutCommandeComponent },
      { path: 'listlignedecommande', component: ListLigneDeCommandeComponent },
      { path: 'login', component: LoginComponent },

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
