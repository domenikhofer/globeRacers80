import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {UserDataService} from '../services/user-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from '../login/login.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UserDataService} from '../services/user-data.service';
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
<<<<<<< HEAD
      imports: [FormsModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [UserDataService, HttpClient, HttpHandler]
=======
      imports: [
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
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
        UserDataService
      ]
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
