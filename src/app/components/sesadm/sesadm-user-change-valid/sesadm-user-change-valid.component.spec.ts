import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesadmUserChangeValidComponent } from './sesadm-user-change-valid.component';

describe('SesadmUserChangeValidComponent', () => {
  let component: SesadmUserChangeValidComponent;
  let fixture: ComponentFixture<SesadmUserChangeValidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SesadmUserChangeValidComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesadmUserChangeValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
