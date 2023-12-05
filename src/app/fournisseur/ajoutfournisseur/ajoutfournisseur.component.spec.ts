import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutFournisseurComponent } from './ajoutfournisseur.component';


describe('AjoutfournisseurComponent', () => {
  let component: AjoutFournisseurComponent;
  let fixture: ComponentFixture<AjoutFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutFournisseurComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AjoutFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
