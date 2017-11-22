import { TestBed, inject } from '@angular/core/testing';

import { AchievementService } from './achievement.service';
import {HttpClient, HttpHandler} from '@angular/common/http';


describe('AchievementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchievementService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([AchievementService], (service: AchievementService) => {
    expect(service).toBeTruthy();
  }));
});
