import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesadmCountiesCountyComponent } from './sesadm-counties-county.component';

describe('SesadmCountiesCountyComponent', () => {
  let component: SesadmCountiesCountyComponent;
  let fixture: ComponentFixture<SesadmCountiesCountyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SesadmCountiesCountyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesadmCountiesCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
