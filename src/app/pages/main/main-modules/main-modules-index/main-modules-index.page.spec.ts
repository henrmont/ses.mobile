import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainModulesIndexPage } from './main-modules-index.page';

describe('MainModulesIndexPage', () => {
  let component: MainModulesIndexPage;
  let fixture: ComponentFixture<MainModulesIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainModulesIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
