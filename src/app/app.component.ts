import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Gestion Commerciale';
  afficherMessageBienvenue: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Vérifier si l'URL actuelle est localhost:4200
    this.afficherMessageBienvenue = this.router.url === '/' && window.location.host.includes('localhost:4200');
  }
}
