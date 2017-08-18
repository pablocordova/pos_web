
/**
 *  The auth guard is used to prevent unauthenticated users from accessing restricted routes,
 *  in this example it's used in
 *  app.routing.ts to protect the home page route.
 */

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      //  logged in so return true
      return true;
    }
    //  note logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url} });
    return false;
  }
}
