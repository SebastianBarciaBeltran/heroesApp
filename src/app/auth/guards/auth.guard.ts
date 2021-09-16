import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// SERVICES
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private _authService: AuthService,
               private _router: Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if (this._authService.auth.id) {
      //   return true
      // }
      
      // console.log('Bloqueado por el authGuards - CanActivate');
      // return false;

      return this._authService.checkAutentication().pipe(
        tap(
          autenticated => {
            if ( !autenticated ) {
              this._router.navigate(['./auth/login'])
            }
          }
        )
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      // console.log('CanLoad', false );
      // console.log(route);
      // console.log(segments);
      // if (this._authService.auth.id) {
      //   return true
      // }
      
      // console.log('Bloqueado por el authGuards - CanLoad');
      // return false;

      return this._authService.checkAutentication().pipe(
        tap(
          autenticated => {
            if ( !autenticated ) {
              this._router.navigate(['./auth/login'])
            }
          }
        )
      );
  }
}
