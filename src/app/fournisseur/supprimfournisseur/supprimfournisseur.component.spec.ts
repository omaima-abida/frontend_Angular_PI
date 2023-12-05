import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimfournisseurComponent } from './supprimfournisseur.component';

describe('SupprimfournisseurComponent', () => {
  let component: SupprimfournisseurComponent;
  let fixture: ComponentFixture<SupprimfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimfournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
