// register.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { RegisterService } from 'src/app/services/register.service';
//import { RegisterService } from './register.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [RegisterService], // Add any additional services if needed
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit method when the form is submitted', () => {
    const spy = spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('onSubmit should call registerService.register with correct user information', () => {
    const registerService = TestBed.inject(RegisterService);
    const spy = spyOn(registerService, 'register').and.callThrough();

    component.email = 'test@example.com';
    component.password = 'password';
    component.firstname = 'John';
    component.lastname = 'Doe';

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith('test@example.com', 'password', 'John', 'Doe');
  });
});
