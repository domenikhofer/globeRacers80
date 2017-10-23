// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { GamecontainerComponent } from './gamecontainer/gamecontainer.component';

import { AuthGuard } from './auth.guard';


// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game', canActivate: [AuthGuard], component: GamecontainerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
