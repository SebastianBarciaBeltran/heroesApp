import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// INTERFACES
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';

// SERVICES
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  get auth(){
    return this._authService.auth;
  }

  constructor( private _router : Router,
               private _authService: AuthService ) { }

  ngOnInit(): void {
  }

  logOut(){
    this._router.navigate(['./auth']);
  }

}
