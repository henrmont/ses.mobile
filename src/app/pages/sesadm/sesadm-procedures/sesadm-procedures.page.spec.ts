import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesadmProceduresPage } from './sesadm-procedures.page';

describe('SesadmProceduresPage', () => {
  let component: SesadmProceduresPage;
  let fixture: ComponentFixture<SesadmProceduresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesadmProceduresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
