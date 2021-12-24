import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UiModule } from 'projects/ui/src/app/components/ui.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UiModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
