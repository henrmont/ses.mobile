import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisppiCompetencesPage } from './sisppi-competences.page';

describe('SisppiCompetencesPage', () => {
  let component: SisppiCompetencesPage;
  let fixture: ComponentFixture<SisppiCompetencesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisppiCompetencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
