import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisppiProceduresPage } from './sisppi-procedures.page';

describe('SisppiProceduresPage', () => {
  let component: SisppiProceduresPage;
  let fixture: ComponentFixture<SisppiProceduresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisppiProceduresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
