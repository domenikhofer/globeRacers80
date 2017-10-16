import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { OdometerComponent } from './odometer/odometer.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TachometerComponent } from './tachometer/tachometer.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UpgradeService } from './services/upgrade.service';
import { UserDataService } from './services/user-data.service';
import { AchievementService } from './services/achievement.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ClickCounterComponent,
    OdometerComponent,
    AchievementComponent,
    TachometerComponent,
    UpgradeComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserDataService,
    AchievementService,
    UpgradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
