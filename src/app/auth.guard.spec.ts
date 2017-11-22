import { TestBed, async, inject } from '@angular/core/testing';
import {Router, RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import {UserDataService} from './services/user-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        UserDataService,
        HttpClient,
        HttpHandler,
        {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }}
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
