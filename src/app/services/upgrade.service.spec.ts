import {TestBed, inject} from '@angular/core/testing';

import {UpgradeService} from './upgrade.service';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

describe('UpgradeService', () => {
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
        UpgradeService
      ]
    });
  });

  it('should be created', inject([UpgradeService], (service: UpgradeService) => {
    expect(service).toBeTruthy();
  }));
});
