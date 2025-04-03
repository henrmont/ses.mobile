import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesadmUserChangeRolesComponent } from './sesadm-user-change-roles.component';

describe('SesadmUserChangeRolesComponent', () => {
  let component: SesadmUserChangeRolesComponent;
  let fixture: ComponentFixture<SesadmUserChangeRolesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SesadmUserChangeRolesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesadmUserChangeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
