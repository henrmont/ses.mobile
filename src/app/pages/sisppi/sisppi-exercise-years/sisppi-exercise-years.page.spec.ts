import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisppiExerciseYearsPage } from './sisppi-exercise-years.page';

describe('SisppiExerciseYearsPage', () => {
  let component: SisppiExerciseYearsPage;
  let fixture: ComponentFixture<SisppiExerciseYearsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisppiExerciseYearsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
