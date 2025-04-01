import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMessagesIndexPage } from './main-messages-index.page';

describe('MainMessagesIndexPage', () => {
  let component: MainMessagesIndexPage;
  let fixture: ComponentFixture<MainMessagesIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMessagesIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
