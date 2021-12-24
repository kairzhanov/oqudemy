import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from 'projects/oqudemy/src/app/core/models/lesson.model';
import { LessonService } from 'projects/oqudemy/src/app/core/services/lesson.service';
import { empty } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-overview',
  templateUrl: './lesson-overview.component.html',
  styleUrls: ['./lesson-overview.component.scss']
})
export class LessonOverviewComponent implements OnInit {

  lessonId!: number;
  lesson!: Lesson;

  constructor(private route: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      if (params['lessonId']) {
        this.lessonId = Number(params['lessonId']);
        return this.lessonService.getLesson(this.lessonId);
      }
      return empty();
    })).subscribe(result => {
      if (result !== null) {
        this.lesson = result;
      }
    });
  }

}
