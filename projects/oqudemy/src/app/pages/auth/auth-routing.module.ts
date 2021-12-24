import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from '../../core/guards/exit.guard';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [ ExitGuard ]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
