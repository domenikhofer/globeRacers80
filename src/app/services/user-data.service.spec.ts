import {TestBed, inject} from '@angular/core/testing';
import {UserDataService} from './user-data.service';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));

  it('#getUserLoggedIn should be null on creation', inject([UserDataService], (service: UserDataService) => {
    expect(service.getUserLoggedIn()).toBe(null);
  }));
});
