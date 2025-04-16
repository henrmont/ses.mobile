import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesadmSigtapPage } from './sesadm-sigtap.page';

describe('SesadmSigtapPage', () => {
  let component: SesadmSigtapPage;
  let fixture: ComponentFixture<SesadmSigtapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesadmSigtapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
