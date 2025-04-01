import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthMtloginPage } from './auth-mtlogin.page';

describe('AuthMtloginPage', () => {
  let component: AuthMtloginPage;
  let fixture: ComponentFixture<AuthMtloginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMtloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
