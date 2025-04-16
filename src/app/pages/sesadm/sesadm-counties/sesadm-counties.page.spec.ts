import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesadmCountiesPage } from './sesadm-counties.page';

describe('SesadmCountiesPage', () => {
  let component: SesadmCountiesPage;
  let fixture: ComponentFixture<SesadmCountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesadmCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
