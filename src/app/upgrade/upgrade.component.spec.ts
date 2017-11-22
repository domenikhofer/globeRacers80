import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeComponent } from './upgrade.component';
import {UpgradeService} from '../services/upgrade.service';
import {UserDataService} from '../services/user-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';


describe('UpgradeComponent', () => {
  let component: UpgradeComponent;
  let fixture: ComponentFixture<UpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeComponent ],
      providers: [UpgradeService, UserDataService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
