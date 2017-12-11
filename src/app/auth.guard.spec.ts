import {TestBed, async, inject} from '@angular/core/testing';
import {Router, RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UserDataService} from './services/user-data.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
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
  });

  it('should inject AuthGuard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('#canActivate should return false after creation', async(inject([AuthGuard, Router], (guard, router) => {
    expect(guard.canActivate(<any>{}, <any>{})).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/welcome']);
  })
  ));
});
