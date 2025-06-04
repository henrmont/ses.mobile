import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisppiRolesPage } from './sisppi-roles.page';

describe('SisppiRolesPage', () => {
  let component: SisppiRolesPage;
  let fixture: ComponentFixture<SisppiRolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisppiRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
