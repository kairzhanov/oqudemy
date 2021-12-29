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
    component: AuthComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [ ExitGuard ],
    data: {
      breadcrumb: 'Sign Up'
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      breadcrumb: 'Forgot Password'
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      breadcrumb: 'Reset Password'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
