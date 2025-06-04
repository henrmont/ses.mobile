import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisppiUserPage } from './sisppi-user.page';

describe('SisppiUserPage', () => {
  let component: SisppiUserPage;
  let fixture: ComponentFixture<SisppiUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisppiUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
