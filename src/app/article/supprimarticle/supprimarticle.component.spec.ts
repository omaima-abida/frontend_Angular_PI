import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimarticleComponent } from './supprimarticle.component';

describe('SupprimarticleComponent', () => {
  let component: SupprimarticleComponent;
  let fixture: ComponentFixture<SupprimarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
