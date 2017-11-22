import { TestBed, async, inject } from '@angular/core/testing';
import {Router, RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
<<<<<<< HEAD
import {UserDataService} from './services/user-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
=======
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UserDataService} from './services/user-data.service';
import {Router, RouterModule} from '@angular/router';
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
<<<<<<< HEAD
        AuthGuard,
        UserDataService,
        HttpClient,
        HttpHandler,
        {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }}
      ],
    });
=======
        MockBackend,
        BaseRequestOptions,
        AuthGuard,
        {
          provide: HttpClient,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Router,
          useClass: class {navigate = jasmine.createSpy('navigate'); }
        },
        UserDataService
      ]
    }).compileComponents();
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89
  });

  it('should inject AuthGuard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
