import { TestBed, inject } from '@angular/core/testing';

import { UpgradeService } from './upgrade.service';
<<<<<<< HEAD
import {HttpClient, HttpHandler} from '@angular/common/http';

=======
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89

describe('UpgradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      providers: [UpgradeService, HttpClient, HttpHandler]
=======
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
>>>>>>> c8d0508877f0fd540525def4da8834d358d73e89
    });
  });

  it('should be created', inject([UpgradeService], (service: UpgradeService) => {
    expect(service).toBeTruthy();
  }));
});
