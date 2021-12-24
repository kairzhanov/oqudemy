import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    component: ErrorComponent 
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'forbidden',
    component: NoAccessComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
