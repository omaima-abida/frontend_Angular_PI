import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutlignedecommandeComponent } from './ajoutlignedecommande.component';

//import { AjoutlignedecommandeComponent } from './ajoutlignedecommande.component';

describe('AjoutlignedecommandeComponent', () => {
  let component: AjoutlignedecommandeComponent;
  let fixture: ComponentFixture<AjoutlignedecommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutlignedecommandeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AjoutlignedecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
