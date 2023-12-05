import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifFournisseurComponent } from './modiffournisseur.component';


describe('ModiffournisseurComponent', () => {
  let component: ModifFournisseurComponent;
  let fixture: ComponentFixture<ModifFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifFournisseurComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModifFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
