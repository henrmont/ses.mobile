import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesadmUsersPage } from './sesadm-users.page';

describe('SesadmUsersPage', () => {
  let component: SesadmUsersPage;
  let fixture: ComponentFixture<SesadmUsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesadmUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
