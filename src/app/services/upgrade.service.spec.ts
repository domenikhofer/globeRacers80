import { TestBed, inject } from '@angular/core/testing';

import { UpgradeService } from './upgrade.service';
import {HttpClient, HttpHandler} from '@angular/common/http';


describe('UpgradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpgradeService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([UpgradeService], (service: UpgradeService) => {
    expect(service).toBeTruthy();
  }));
});
