// modifarticle.component.ts

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modifarticle',
  templateUrl: './modifarticle.component.html',
  styleUrls: ['./modifarticle.component.css']
})
export class ModifArticleComponent implements OnInit {
  @Input() article: any;
  @Output() cancelEdit: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    // Initialisation du formulaire
  }

  modifierArticle(): void {
    // Logique de modification
  }

  onCancelEdit(): void {
    // Émettre l'événement d'annulation
    this.cancelEdit.emit();
  }
}
