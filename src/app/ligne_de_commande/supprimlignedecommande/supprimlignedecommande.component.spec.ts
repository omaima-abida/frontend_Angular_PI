import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimlignedecommandeComponent } from './supprimlignedecommande.component';

describe('SupprimlignedecommandeComponent', () => {
  let component: SupprimlignedecommandeComponent;
  let fixture: ComponentFixture<SupprimlignedecommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimlignedecommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimlignedecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
