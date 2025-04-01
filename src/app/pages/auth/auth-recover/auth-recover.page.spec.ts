import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthRecoverPage } from './auth-recover.page';

describe('AuthRecoverPage', () => {
  let component: AuthRecoverPage;
  let fixture: ComponentFixture<AuthRecoverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRecoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
