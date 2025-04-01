import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthIndexPage } from './auth-index.page';

describe('AuthIndexPage', () => {
  let component: AuthIndexPage;
  let fixture: ComponentFixture<AuthIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
