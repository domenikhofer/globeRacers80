import { TestBed, inject } from '@angular/core/testing';

import { AchievementService } from './achievement.service';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

describe('AchievementService', () => {
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
        AchievementService
      ]
    });
  });

  it('should be created', inject([AchievementService], (service: AchievementService) => {
    expect(service).toBeTruthy();
  }));
});
