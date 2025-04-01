import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisppiIndexPage } from './sisppi-index.page';

describe('SisppiIndexPage', () => {
  let component: SisppiIndexPage;
  let fixture: ComponentFixture<SisppiIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisppiIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
