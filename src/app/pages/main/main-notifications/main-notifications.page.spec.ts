import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainNotificationsPage } from './main-notifications.page';

describe('MainNotificationsPage', () => {
  let component: MainNotificationsPage;
  let fixture: ComponentFixture<MainNotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
