import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesadmUserChangeInfoComponent } from './sesadm-user-change-info.component';

describe('SesadmUserChangeInfoComponent', () => {
  let component: SesadmUserChangeInfoComponent;
  let fixture: ComponentFixture<SesadmUserChangeInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SesadmUserChangeInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesadmUserChangeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
