import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTES
import { AuthRoutingModule } from './auth-routing.module';

// COMPONENTS
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    
  ]
})
export class AuthModule { }
