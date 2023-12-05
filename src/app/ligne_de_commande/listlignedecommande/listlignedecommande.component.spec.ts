import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLigneDeCommandeComponent } from './listlignedecommande.component';

//import { ListlignedecommandeComponent } from './listlignedecommande.component';

describe('ListlignedecommandeComponent', () => {
  let component: ListLigneDeCommandeComponent;
  let fixture: ComponentFixture<ListLigneDeCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListLigneDeCommandeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListLigneDeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
