// login.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login.service';
//import { LoginService } from './login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [LoginService], // Add any additional services if needed
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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

  it('onSubmit should call loginService.login with correct credentials', () => {
    const loginService = TestBed.inject(LoginService);
    const spy = spyOn(loginService, 'login').and.callThrough();

    component.email = 'test@example.com';
    component.password = 'password';
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
