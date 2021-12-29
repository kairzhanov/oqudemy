import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from '../core/pipes/time.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from '../core/pipes/safe.pipe';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UiModule } from 'projects/ui/src/app/components/ui.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TimePipe,
    SafePipe,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    UiModule
  ],
  exports: [
    TimePipe,
    SafePipe,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
