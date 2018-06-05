import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { UserRoutes } from './user.routes';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)

  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
