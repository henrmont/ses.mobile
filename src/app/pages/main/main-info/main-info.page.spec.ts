import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainInfoPage } from './main-info.page';

describe('MainInfoPage', () => {
  let component: MainInfoPage;
  let fixture: ComponentFixture<MainInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
