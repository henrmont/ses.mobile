import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SesadmIndexPage } from './sesadm-index.page';

describe('SesadmIndexPage', () => {
  let component: SesadmIndexPage;
  let fixture: ComponentFixture<SesadmIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SesadmIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
