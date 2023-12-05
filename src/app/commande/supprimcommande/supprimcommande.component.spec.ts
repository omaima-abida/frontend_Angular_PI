import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimcommandeComponent } from './supprimcommande.component';

describe('SupprimcommandeComponent', () => {
  let component: SupprimcommandeComponent;
  let fixture: ComponentFixture<SupprimcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimcommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
