import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { TitleComponent } from './title/title.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MyCourseCardComponent } from './my-course-card/my-course-card.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { RatingComponent } from './rating/rating.component';
import { QnaItemComponent } from './qna-item/qna-item.component';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [
    NavbarItemComponent,
    ButtonComponent,
    CourseCardComponent,
    TitleComponent,
    CourseListComponent,
    MyCourseCardComponent,
    LessonListComponent,
    RatingComponent,
    QnaItemComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarItemComponent,
    ButtonComponent,
    CourseCardComponent,
    TitleComponent,
    CourseListComponent,
    MyCourseCardComponent,
    LessonListComponent,
    RatingComponent,
    QnaItemComponent,
    PostCardComponent
  ]
})
export class UiModule { }
