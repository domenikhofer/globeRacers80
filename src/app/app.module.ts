import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { UserDataService } from './user-data.service';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { OdometerComponent } from './odometer/odometer.component';
import { AchievementService } from './achievement.service';
import { AchievementComponent } from './achievement/achievement.component';
import { TachometerComponent } from './tachometer/tachometer.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {UpgradeService} from './upgrade.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ClickCounterComponent,
    OdometerComponent,
    AchievementComponent,
    TachometerComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserDataService,
    AchievementService,
    UpgradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
