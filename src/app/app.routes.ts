// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { GamecontainerComponent } from './gamecontainer/gamecontainer.component';

import { AuthGuard } from './auth.guard';
import {WelcomeComponent} from './welcome/welcome.component';


// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', canActivate: [AuthGuard], component: GamecontainerComponent }
 // { path: 'game', component: GamecontainerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
