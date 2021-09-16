import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
              private _authService: AuthService) { }

  ngOnInit(): void {
 
  }

  login(){
    
    // IR AL BACKEND PARA SABER SI EXISTE O NO
    // UN USUARIO
    this._authService.login()
    .subscribe( (res) => {
      console.log( res );

      if (res.id) {
        this._router.navigate(['./heroes']);
      }
      
    })


  }

}
