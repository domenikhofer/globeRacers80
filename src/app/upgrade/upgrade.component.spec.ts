import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeComponent } from './upgrade.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UpgradeService} from '../services/upgrade.service';
import {UserDataService} from '../services/user-data.service';

describe('UpgradeComponent', () => {
  let component: UpgradeComponent;
  let fixture: ComponentFixture<UpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeComponent ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: HttpClient,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        UpgradeService,
        UserDataService
      ]
    }).compileComponents();
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
