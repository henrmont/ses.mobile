import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesadmRolesPage } from './sesadm-roles.page';

describe('SesadmRolesPage', () => {
  let component: SesadmRolesPage;
  let fixture: ComponentFixture<SesadmRolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesadmRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
