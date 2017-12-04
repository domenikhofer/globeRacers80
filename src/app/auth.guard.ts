import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserDataService } from './services/user-data.service';

import {Router} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userDataService: UserDataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return (this.userDataService.getUserLoggedIn() ? true : false);
    if (this.userDataService.getUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/welcome']);
      return false;
    }
  }
}
