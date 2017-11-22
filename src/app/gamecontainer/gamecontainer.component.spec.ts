import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecontainerComponent } from './gamecontainer.component';
import { UserDataService } from '../services/user-data.service';
import { UpgradeService } from '../services/upgrade.service';
import { AchievementService } from '../services/achievement.service';

import { CarComponent } from '../car/car.component';
import { TachometerComponent } from '../tachometer/tachometer.component';
import { OdometerComponent } from '../odometer/odometer.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { AchievementComponent } from '../achievement/achievement.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';


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
      providers: [UserDataService, UpgradeService, AchievementService, HttpClient, HttpHandler],
      imports: [RouterTestingModule]
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
