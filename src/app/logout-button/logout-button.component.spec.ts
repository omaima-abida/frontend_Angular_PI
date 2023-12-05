// logout-button.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutButtonComponent } from './logout-button.component';
import { AuthService } from '../services/auth.service';
import { By } from '@angular/platform-browser';

describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let fixture: ComponentFixture<LogoutButtonComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['logout']);

    TestBed.configureTestingModule({
      declarations: [LogoutButtonComponent],
      providers: [{ provide: AuthService, useValue: authService }],
    });

    fixture = TestBed.createComponent(LogoutButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.logout() when logout button is clicked', () => {
    // Arrange
    const button = fixture.debugElement.query(By.css('button'));

    // Act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(authService.logout).toHaveBeenCalled();
  });
});
