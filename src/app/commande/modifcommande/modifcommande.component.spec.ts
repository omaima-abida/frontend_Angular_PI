import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifCommandeComponent } from './modifcommande.component';

describe('ModifcommandeComponent', () => {
  let component: ModifCommandeComponent;
  let fixture: ComponentFixture<ModifCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifCommandeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModifCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
