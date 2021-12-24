import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { UiModule } from 'projects/ui/src/app/components/ui.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ErrorComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    RouterModule,
    UiModule
  ],
  exports: [
    NotFoundComponent,
    NoAccessComponent,
    ErrorComponent,
  ]
})
export class ErrorModule { }
