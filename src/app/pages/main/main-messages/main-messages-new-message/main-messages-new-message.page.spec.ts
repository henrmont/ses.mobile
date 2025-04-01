import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMessagesNewMessagePage } from './main-messages-new-message.page';

describe('MainMessagesNewMessagePage', () => {
  let component: MainMessagesNewMessagePage;
  let fixture: ComponentFixture<MainMessagesNewMessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMessagesNewMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
