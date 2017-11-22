import { TestBed, inject } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';


describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});
