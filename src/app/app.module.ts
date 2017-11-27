import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Ng2OdometerModule } from 'ng2-odometer';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { OdometerComponent } from './odometer/odometer.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TachometerComponent } from './tachometer/tachometer.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UpgradeService } from './services/upgrade.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { GamecontainerComponent } from './gamecontainer/gamecontainer.component';
import { RegistrationComponent } from './registration/registration.component';

import { UserDataService } from './services/user-data.service';
import { AchievementService } from './services/achievement.service';

import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ClickCounterComponent,
    OdometerComponent,
    AchievementComponent,
    TachometerComponent,
    UpgradeComponent,
    LeaderboardComponent,
    LoginComponent,
    GamecontainerComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    routing,
    Ng2OdometerModule
  ],
  providers: [
    UserDataService,
    AchievementService,
    UpgradeService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
