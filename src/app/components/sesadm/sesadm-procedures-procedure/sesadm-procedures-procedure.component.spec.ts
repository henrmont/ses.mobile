import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesadmProceduresProcedureComponent } from './sesadm-procedures-procedure.component';

describe('SesadmProceduresProcedureComponent', () => {
  let component: SesadmProceduresProcedureComponent;
  let fixture: ComponentFixture<SesadmProceduresProcedureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SesadmProceduresProcedureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesadmProceduresProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
