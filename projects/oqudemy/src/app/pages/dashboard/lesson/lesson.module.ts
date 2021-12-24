import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';
import { LessonQnaComponent } from './lesson-qna/lesson-qna.component';
import { LessonNotesComponent } from './lesson-notes/lesson-notes.component';
import { UiModule } from 'projects/ui/src/app/components/ui.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LessonComponent, 
    LessonOverviewComponent, 
    LessonQnaComponent, 
    LessonNotesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UiModule,
    ReactiveFormsModule,
  ],
  exports: [
    LessonComponent,
    LessonOverviewComponent, 
    LessonQnaComponent, 
    LessonNotesComponent
  ]
})
export class LessonModule { }
