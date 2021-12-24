import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../../core/guards/role.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    canActivate: [ RoleGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
