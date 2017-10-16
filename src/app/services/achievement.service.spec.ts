import { TestBed, inject } from '@angular/core/testing';

import { AchievementService } from './achievement.service';

describe('AchievementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchievementService]
    });
  });

  it('should be created', inject([AchievementService], (service: AchievementService) => {
    expect(service).toBeTruthy();
  }));
});
