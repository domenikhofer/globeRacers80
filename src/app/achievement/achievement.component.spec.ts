import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AchievementService} from '../services/achievement.service';
import {UserDataService} from '../services/user-data.service';
import {AchievementComponent} from './achievement.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

describe('AchievementComponent', () => {
  let component: AchievementComponent;
  let fixture: ComponentFixture<AchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementComponent ],
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
        AchievementService,
        UserDataService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});



/*
*
*
*     TestBed.configureTestingModule({
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
*
*
* */
