import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdometerComponent } from './odometer.component';
import { Ng2OdometerModule } from 'ng2-odometer';

describe('OdometerComponent', () => {
  let component: OdometerComponent;
  let fixture: ComponentFixture<OdometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdometerComponent ],
      imports: [ Ng2OdometerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
