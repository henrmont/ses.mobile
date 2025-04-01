import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesadmUserPage } from './sesadm-user.page';

describe('SesadmUserPage', () => {
  let component: SesadmUserPage;
  let fixture: ComponentFixture<SesadmUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesadmUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
