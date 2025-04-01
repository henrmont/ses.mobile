import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SistfdIndexPage } from './sistfd-index.page';

describe('SistfdIndexPage', () => {
  let component: SistfdIndexPage;
  let fixture: ComponentFixture<SistfdIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SistfdIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
