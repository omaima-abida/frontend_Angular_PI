import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCommandeComponent } from './listcommande.component';

//import { ListcommandeComponent } from './listcommande.component';

describe('ListcommandeComponent', () => {
  let component: ListCommandeComponent;
  let fixture: ComponentFixture<ListCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCommandeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
