import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// ENVIRONMENTS
import { environment } from 'src/environments/environment';

// INTERFACES
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private _http: HttpClient) { }
  

  // GETTERS
  get auth(): Auth {
    return {...this._auth! }
  }

  // FUNCTIONS

  checkAutentication(): Observable<boolean>{  

    if ( !localStorage.getItem('token') ) {
      return of(false);
    }

    return this._http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
            .pipe(
              map( auth => {
                this._auth = auth;
                console.log('operador map:', auth);
                return true;
              })
            );
  }

  login(){
   return this._http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
        .pipe(
            tap( auth => this._auth = auth),
            tap( auth => localStorage.setItem('token', auth.id)),
        )
  }

  logOut(){
    this._auth = undefined;
  }




}
