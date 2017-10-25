import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserDataService } from './services/user-data.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userDataService: UserDataService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return (this.userDataService.getUserLoggedIn() ? true : false);
  }
}
