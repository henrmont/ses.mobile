import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainModulesPage } from './main-modules.page';

describe('MainModulesPage', () => {
  let component: MainModulesPage;
  let fixture: ComponentFixture<MainModulesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainModulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
