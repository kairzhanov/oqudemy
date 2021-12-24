import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from '../core/pipes/time.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from '../core/pipes/safe.pipe';



@NgModule({
  declarations: [
    TimePipe,
    SafePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TimePipe,
    SafePipe
  ]
})
export class SharedModule { }
