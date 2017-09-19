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
import { UpgradeService } from './upgrade.service';
import { UserDataService } from './user-data.service';
import { AchievementService } from './achievement.service';


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
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserDataService,
    AchievementService,
    UpgradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
