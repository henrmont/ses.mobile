import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainMessagesNewChatComponent } from './main-messages-new-chat.component';

describe('MainMessagesNewChatComponent', () => {
  let component: MainMessagesNewChatComponent;
  let fixture: ComponentFixture<MainMessagesNewChatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMessagesNewChatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainMessagesNewChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
