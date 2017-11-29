import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GamecontainerComponent} from './gamecontainer.component';
import {CarComponent} from '../car/car.component';
import {TachometerComponent} from '../tachometer/tachometer.component';
import {OdometerComponent} from '../odometer/odometer.component';
import {LeaderboardComponent} from '../leaderboard/leaderboard.component';
import {AchievementComponent} from '../achievement/achievement.component';
import {UpgradeComponent} from '../upgrade/upgrade.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {UserDataService} from '../services/user-data.service';
import {UpgradeService} from '../services/upgrade.service';
import {AchievementService} from '../services/achievement.service';
import { Ng2OdometerModule } from 'ng2-odometer';
import {Router} from '@angular/router';

describe('GamecontainerComponent', () => {
  let component: GamecontainerComponent;
  let fixture: ComponentFixture<GamecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamecontainerComponent,
        CarComponent,
        TachometerComponent,
        OdometerComponent,
        LeaderboardComponent,
        AchievementComponent,
        UpgradeComponent
      ],
      imports:[ Ng2OdometerModule ],
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
        {
          provide: Router,
          useClass: class {navigate = jasmine.createSpy('navigate'); }
        },
        UserDataService,
        UpgradeService,
        AchievementService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
