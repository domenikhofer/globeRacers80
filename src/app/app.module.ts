import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { UserDataService } from './user-data.service';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { OdometerComponent } from './odometer/odometer.component';
import { AchievementService } from './achievement.service';
import { AchievementComponent } from './achievement/achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ClickCounterComponent,
    OdometerComponent,
    AchievementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserDataService,
    AchievementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
