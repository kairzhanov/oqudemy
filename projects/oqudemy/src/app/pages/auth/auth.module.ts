import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UiModule } from 'projects/ui/src/app/components/ui.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UiModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
})
export class AuthModule { }
