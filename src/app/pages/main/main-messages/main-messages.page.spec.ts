import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMessagesPage } from './main-messages.page';

describe('MainMessagesPage', () => {
  let component: MainMessagesPage;
  let fixture: ComponentFixture<MainMessagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
