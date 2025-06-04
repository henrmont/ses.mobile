import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SisppiProceduresProcedureComponent } from './sisppi-procedures-procedure.component';

describe('SisppiProceduresProcedureComponent', () => {
  let component: SisppiProceduresProcedureComponent;
  let fixture: ComponentFixture<SisppiProceduresProcedureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SisppiProceduresProcedureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SisppiProceduresProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
