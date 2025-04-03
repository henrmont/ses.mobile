import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesadmUserChangeModulesComponent } from './sesadm-user-change-modules.component';

describe('SesadmUserChangeModulesComponent', () => {
  let component: SesadmUserChangeModulesComponent;
  let fixture: ComponentFixture<SesadmUserChangeModulesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SesadmUserChangeModulesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesadmUserChangeModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
