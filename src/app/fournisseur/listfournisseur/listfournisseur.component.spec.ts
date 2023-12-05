import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFournisseurComponent } from './listfournisseur.component';

describe('ListfournisseurComponent', () => {
  let component: ListFournisseurComponent;
  let fixture: ComponentFixture<ListFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFournisseurComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
